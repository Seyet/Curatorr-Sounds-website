import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.from("latest_releases").select("*").order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json({ releases: data || [] })
  } catch (error) {
    console.error("[v0] Error fetching releases:", error)
    return NextResponse.json({ releases: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const supabase = await createClient()

    const { data: newRelease, error } = await supabase.from("latest_releases").insert([data]).select().single()

    if (error) throw error

    return NextResponse.json(newRelease, { status: 201 })
  } catch (error) {
    console.error("[v0] Error creating release:", error)
    return NextResponse.json({ error: "Failed to create release" }, { status: 500 })
  }
}
