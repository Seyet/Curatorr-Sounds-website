import { type NextRequest, NextResponse } from "next/server"

async function getLatestReleases() {
  try {
    const { get } = await import("@vercel/blob")
    const blob = await get("latest-releases.json")
    return JSON.parse(await blob.text())
  } catch {
    return []
  }
}

async function saveLatestReleases(releases: any) {
  const { put } = await import("@vercel/blob")
  await put("latest-releases.json", JSON.stringify(releases), { access: "public", allowOverwrite: true })
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()
    console.log("[v0] Updating release:", params.id, data)
    const releases = await getLatestReleases()

    const index = releases.findIndex((r: any) => r.id === params.id)
    if (index === -1) {
      return NextResponse.json({ error: "Release not found" }, { status: 404 })
    }

    releases[index] = { ...releases[index], ...data }
    await saveLatestReleases(releases)
    console.log("[v0] Release updated successfully")

    return NextResponse.json(releases[index])
  } catch (error) {
    console.error("[v0] Error updating release:", error)
    return NextResponse.json({ error: "Failed to update release" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log("[v0] Deleting release:", params.id)
    const releases = await getLatestReleases()
    const filtered = releases.filter((r: any) => r.id !== params.id)

    if (filtered.length === releases.length) {
      return NextResponse.json({ error: "Release not found" }, { status: 404 })
    }

    await saveLatestReleases(filtered)
    console.log("[v0] Release deleted successfully")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error deleting release:", error)
    return NextResponse.json({ error: "Failed to delete release" }, { status: 500 })
  }
}
