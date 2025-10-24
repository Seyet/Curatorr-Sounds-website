import { type NextRequest, NextResponse } from "next/server"

async function getLatestReleases() {
  try {
    const { get } = await import("@vercel/blob")
    const blob = await get("latest-releases.json")
    const data = JSON.parse(await blob.text())
    console.log("[v0] Loaded latest releases:", data)
    return data
  } catch (error) {
    console.log("[v0] No existing latest releases, returning empty array")
    return []
  }
}

async function saveLatestReleases(releases: any) {
  const { put } = await import("@vercel/blob")
  console.log("[v0] Saving latest releases:", releases)
  await put("latest-releases.json", JSON.stringify(releases), { access: "public", allowOverwrite: true })
  console.log("[v0] Latest releases saved successfully")
}

export async function GET() {
  try {
    const releases = await getLatestReleases()
    return NextResponse.json({ releases })
  } catch (error) {
    console.error("[v0] Error fetching releases:", error)
    return NextResponse.json({ releases: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    console.log("[v0] Creating new release:", data)
    const releases = await getLatestReleases()

    const newRelease = {
      id: Date.now().toString(),
      ...data,
    }

    releases.push(newRelease)
    await saveLatestReleases(releases)

    return NextResponse.json(newRelease, { status: 201 })
  } catch (error) {
    console.error("[v0] Error creating release:", error)
    return NextResponse.json({ error: "Failed to create release" }, { status: 500 })
  }
}
