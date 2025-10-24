import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()
    const supabase = await createClient()

    const { data: updatedRelease, error } = await supabase
      .from("latest_releases")
      .update(data)
      .eq("id", params.id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(updatedRelease)
  } catch (error) {
    console.error("[v0] Error updating release:", error)
    return NextResponse.json({ error: "Failed to update release" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const supabase = await createClient()

    const { error } = await supabase.from("latest_releases").delete().eq("id", params.id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error deleting release:", error)
    return NextResponse.json({ error: "Failed to delete release" }, { status: 500 })
  }
}
