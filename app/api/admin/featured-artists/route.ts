import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("featured_artists")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json({ artists: data || [] })
  } catch (error) {
    console.error("[v0] Error fetching artists:", error)
    return NextResponse.json({ artists: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const supabase = await createClient()

    const { data: newArtist, error } = await supabase.from("featured_artists").insert([data]).select().single()

    if (error) throw error

    return NextResponse.json(newArtist, { status: 201 })
  } catch (error) {
    console.error("[v0] Error creating artist:", error)
    return NextResponse.json({ error: "Failed to create artist" }, { status: 500 })
  }
}
