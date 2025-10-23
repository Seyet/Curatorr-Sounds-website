import { type NextRequest, NextResponse } from "next/server"
import { put, get } from "@vercel/blob"

const FEATURED_ARTISTS_KEY = "featured-artists.json"

async function getFeaturedArtists() {
  try {
    const blob = await get(FEATURED_ARTISTS_KEY)
    return JSON.parse(await blob.text())
  } catch {
    return []
  }
}

async function saveFeaturedArtists(artists: any) {
  await put(FEATURED_ARTISTS_KEY, JSON.stringify(artists), { access: "private" })
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
