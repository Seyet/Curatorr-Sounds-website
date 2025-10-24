import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()
    const supabase = await createClient()

    const { data: updatedArtist, error } = await supabase
      .from("featured_artists")
      .update(data)
      .eq("id", params.id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(updatedArtist)
  } catch (error) {
    console.error("[v0] Error updating artist:", error)
    return NextResponse.json({ error: "Failed to update artist" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const supabase = await createClient()

    const { error } = await supabase.from("featured_artists").delete().eq("id", params.id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error deleting artist:", error)
    return NextResponse.json({ error: "Failed to delete artist" }, { status: 500 })
  }
}
