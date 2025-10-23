import { type NextRequest, NextResponse } from "next/server"
import { put, get } from "@vercel/blob"

const MUSIC_DROPS_KEY = "music-drops.json"

async function getMusicDrops() {
  try {
    const blob = await get(MUSIC_DROPS_KEY)
    return JSON.parse(await blob.text())
  } catch {
    return []
  }
}

async function saveMusicDrops(drops: any) {
  await put(MUSIC_DROPS_KEY, JSON.stringify(drops), { access: "private" })
}

export async function GET() {
  try {
    const drops = await getMusicDrops()
    return NextResponse.json({ drops })
  } catch (error) {
    console.error("Error fetching drops:", error)
    return NextResponse.json({ drops: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const drops = await getMusicDrops()

    const newDrop = {
      id: Date.now().toString(),
      ...data,
    }

    drops.push(newDrop)
    await saveMusicDrops(drops)

    return NextResponse.json(newDrop, { status: 201 })
  } catch (error) {
    console.error("Error creating drop:", error)
    return NextResponse.json({ error: "Failed to create drop" }, { status: 500 })
  }
}
