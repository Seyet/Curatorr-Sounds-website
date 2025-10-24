import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.from("music_drops").select("*").order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json({ drops: data || [] })
  } catch (error) {
    console.error("[v0] Error fetching drops:", error)
    return NextResponse.json({ drops: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const supabase = await createClient()

    const { data: newDrop, error } = await supabase.from("music_drops").insert([data]).select().single()

    if (error) throw error

    return NextResponse.json(newDrop, { status: 201 })
  } catch (error) {
    console.error("[v0] Error creating drop:", error)
    return NextResponse.json({ error: "Failed to create drop" }, { status: 500 })
  }
}
