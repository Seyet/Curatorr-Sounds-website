import { type NextRequest, NextResponse } from "next/server"

async function getFeaturedArtists() {
  try {
    const { get } = await import("@vercel/blob")
    const blob = await get("featured-artists.json")
    const data = JSON.parse(await blob.text())
    console.log("[v0] Loaded featured artists:", data)
    return data
  } catch (error) {
    console.log("[v0] No existing featured artists, returning empty array")
    return []
  }
}

async function saveFeaturedArtists(artists: any) {
  const { put } = await import("@vercel/blob")
  console.log("[v0] Saving featured artists:", artists)
  await put("featured-artists.json", JSON.stringify(artists), { access: "public", allowOverwrite: true })
  console.log("[v0] Featured artists saved successfully")
}

export async function GET() {
  try {
    const artists = await getFeaturedArtists()
    return NextResponse.json({ artists })
  } catch (error) {
    console.error("[v0] Error fetching artists:", error)
    return NextResponse.json({ artists: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    console.log("[v0] Creating new artist:", data)
    const artists = await getFeaturedArtists()

    const newArtist = {
      id: Date.now().toString(),
      ...data,
    }

    artists.push(newArtist)
    await saveFeaturedArtists(artists)

    return NextResponse.json(newArtist, { status: 201 })
  } catch (error) {
    console.error("[v0] Error creating artist:", error)
    return NextResponse.json({ error: "Failed to create artist" }, { status: 500 })
  }
}
