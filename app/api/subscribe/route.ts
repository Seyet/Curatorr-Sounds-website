import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Here you would integrate with your email service (SendGrid, Resend, etc.)
    // For now, we'll just log the email and send a success response
    console.log(`New subscription: ${email} - forwarding to curatorsoundent@gmail.com`)

    // In a real implementation, you would:
    // 1. Send email to curatorsoundent@gmail.com with the subscriber's email
    // 2. Add the email to your mailing list
    // 3. Send confirmation email to the subscriber

    return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
