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
  await put("featured-artists.json", JSON.stringify(artists), { access: "public" })
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()
    const artists = await getFeaturedArtists()

    const index = artists.findIndex((a: any) => a.id === params.id)
    if (index === -1) {
      return NextResponse.json({ error: "Artist not found" }, { status: 404 })
    }

    artists[index] = { ...artists[index], ...data }
    await saveFeaturedArtists(artists)

    return NextResponse.json(artists[index])
  } catch (error) {
    console.error("Error updating artist:", error)
    return NextResponse.json({ error: "Failed to update artist" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const artists = await getFeaturedArtists()
    const filtered = artists.filter((a: any) => a.id !== params.id)

    if (filtered.length === artists.length) {
      return NextResponse.json({ error: "Artist not found" }, { status: 404 })
    }

    await saveFeaturedArtists(filtered)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting artist:", error)
    return NextResponse.json({ error: "Failed to delete artist" }, { status: 500 })
  }
}
