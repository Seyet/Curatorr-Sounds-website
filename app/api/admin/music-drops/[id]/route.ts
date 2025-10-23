import { type NextRequest, NextResponse } from "next/server"

async function getMusicDrops() {
  try {
    const { get } = await import("@vercel/blob")
    const blob = await get("music-drops.json")
    return JSON.parse(await blob.text())
  } catch {
    return []
  }
}

async function saveMusicDrops(drops: any) {
  const { put } = await import("@vercel/blob")
  await put("music-drops.json", JSON.stringify(drops), { access: "private" })
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()
    const drops = await getMusicDrops()

    const index = drops.findIndex((d: any) => d.id === params.id)
    if (index === -1) {
      return NextResponse.json({ error: "Drop not found" }, { status: 404 })
    }

    drops[index] = { ...drops[index], ...data }
    await saveMusicDrops(drops)

    return NextResponse.json(drops[index])
  } catch (error) {
    console.error("Error updating drop:", error)
    return NextResponse.json({ error: "Failed to update drop" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const drops = await getMusicDrops()
    const filtered = drops.filter((d: any) => d.id !== params.id)

    if (filtered.length === drops.length) {
      return NextResponse.json({ error: "Drop not found" }, { status: 404 })
    }

    await saveMusicDrops(filtered)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting drop:", error)
    return NextResponse.json({ error: "Failed to delete drop" }, { status: 500 })
  }
}
