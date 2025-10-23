import { type NextRequest, NextResponse } from "next/server"
import { put, get } from "@vercel/blob"

const LATEST_RELEASES_KEY = "latest-releases.json"

async function getLatestReleases() {
  try {
    const blob = await get(LATEST_RELEASES_KEY)
    return JSON.parse(await blob.text())
  } catch {
    return []
  }
}

async function saveLatestReleases(releases: any) {
  await put(LATEST_RELEASES_KEY, JSON.stringify(releases), { access: "private" })
}

export async function GET() {
  try {
    const releases = await getLatestReleases()
    return NextResponse.json({ releases })
  } catch (error) {
    console.error("Error fetching releases:", error)
    return NextResponse.json({ releases: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const releases = await getLatestReleases()

    const newRelease = {
      id: Date.now().toString(),
      ...data,
    }

    releases.push(newRelease)
    await saveLatestReleases(releases)

    return NextResponse.json(newRelease, { status: 201 })
  } catch (error) {
    console.error("Error creating release:", error)
    return NextResponse.json({ error: "Failed to create release" }, { status: 500 })
  }
}
