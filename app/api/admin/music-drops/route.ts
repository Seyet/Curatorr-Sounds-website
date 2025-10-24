import { type NextRequest, NextResponse } from "next/server"

async function getMusicDrops() {
  try {
    const { get } = await import("@vercel/blob")
    const blob = await get("music-drops.json")
    const data = JSON.parse(await blob.text())
    console.log("[v0] Loaded music drops:", data)
    return data
  } catch (error) {
    console.log("[v0] No existing music drops, returning empty array")
    return []
  }
}

async function saveMusicDrops(drops: any) {
  const { put } = await import("@vercel/blob")
  console.log("[v0] Saving music drops:", drops)
  await put("music-drops.json", JSON.stringify(drops), { access: "public", allowOverwrite: true })
  console.log("[v0] Music drops saved successfully")
}

export async function GET() {
  try {
    const drops = await getMusicDrops()
    return NextResponse.json({ drops })
  } catch (error) {
    console.error("[v0] Error fetching drops:", error)
    return NextResponse.json({ drops: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    console.log("[v0] Creating new drop:", data)
    const drops = await getMusicDrops()

    const newDrop = {
      id: Date.now().toString(),
      ...data,
    }

    drops.push(newDrop)
    await saveMusicDrops(drops)

    return NextResponse.json(newDrop, { status: 201 })
  } catch (error) {
    console.error("[v0] Error creating drop:", error)
    return NextResponse.json({ error: "Failed to create drop" }, { status: 500 })
  }
}
