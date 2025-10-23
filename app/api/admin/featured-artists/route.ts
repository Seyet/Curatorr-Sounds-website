import { type NextRequest, NextResponse } from "next/server"

async function getFeaturedArtists() {
  try {
    const { get } = await import("@vercel/blob")
    const blob = await get("featured-artists.json")
    return JSON.parse(await blob.text())
  } catch {
    return []
  }
}

async function saveFeaturedArtists(artists: any) {
  const { put } = await import("@vercel/blob")
  await put("featured-artists.json", JSON.stringify(artists), { access: "public", allowOverwrite: true })
}

export async function GET() {
  try {
    const artists = await getFeaturedArtists()
    return NextResponse.json({ artists })
  } catch (error) {
    console.error("Error fetching artists:", error)
    return NextResponse.json({ artists: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const artists = await getFeaturedArtists()

    const newArtist = {
      id: Date.now().toString(),
      ...data,
    }

    artists.push(newArtist)
    await saveFeaturedArtists(artists)

    return NextResponse.json(newArtist, { status: 201 })
  } catch (error) {
    console.error("Error creating artist:", error)
    return NextResponse.json({ error: "Failed to create artist" }, { status: 500 })
  }
}
