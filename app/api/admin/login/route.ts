import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    // Get admin password from environment variable
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      return NextResponse.json({ error: "Admin password not configured" }, { status: 500 })
    }

    if (password !== adminPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 })
    }

    // Generate a simple token (in production, use JWT)
    const token = Buffer.from(`admin:${Date.now()}`).toString("base64")

    return NextResponse.json({ token }, { status: 200 })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
