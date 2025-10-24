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
  await put("music-drops.json", JSON.stringify(drops), { access: "public", allowOverwrite: true })
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()
    console.log("[v0] Updating drop:", params.id, data)
    const drops = await getMusicDrops()

    const index = drops.findIndex((d: any) => d.id === params.id)
    if (index === -1) {
      return NextResponse.json({ error: "Drop not found" }, { status: 404 })
    }

    drops[index] = { ...drops[index], ...data }
    await saveMusicDrops(drops)
    console.log("[v0] Drop updated successfully")

    return NextResponse.json(drops[index])
  } catch (error) {
    console.error("[v0] Error updating drop:", error)
    return NextResponse.json({ error: "Failed to update drop" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log("[v0] Deleting drop:", params.id)
    const drops = await getMusicDrops()
    const filtered = drops.filter((d: any) => d.id !== params.id)

    if (filtered.length === drops.length) {
      return NextResponse.json({ error: "Drop not found" }, { status: 404 })
    }

    await saveMusicDrops(filtered)
    console.log("[v0] Drop deleted successfully")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error deleting drop:", error)
    return NextResponse.json({ error: "Failed to delete drop" }, { status: 500 })
  }
}
