import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"

async function sendDemoNotificationEmail(submissionData: any, fileUrl: string) {
  try {
    // Using a simple fetch to send email via a service like Resend or similar
    // For now, we'll use a basic email service approach
    const emailData = {
      to: "curatorsoundent@gmail.com",
      subject: `New Demo Submission: ${submissionData.trackTitle} by ${submissionData.artistName}`,
      html: `
        <h2>New Demo Submission Received</h2>
        <p><strong>Artist Name:</strong> ${submissionData.artistName}</p>
        <p><strong>Email:</strong> ${submissionData.email}</p>
        <p><strong>Track Title:</strong> ${submissionData.trackTitle}</p>
        <p><strong>Genre:</strong> ${submissionData.genre}</p>
        <p><strong>Description:</strong> ${submissionData.description || "Not provided"}</p>
        <p><strong>Social Media:</strong> ${submissionData.socialMedia || "Not provided"}</p>
        <p><strong>Previous Work:</strong> ${submissionData.previousWork || "Not provided"}</p>
        <p><strong>Additional Info:</strong> ${submissionData.additionalInfo || "Not provided"}</p>
        <p><strong>Demo File:</strong> <a href="${fileUrl}" target="_blank">Download Demo</a></p>
        <p><strong>File Size:</strong> ${(submissionData.fileSize / 1024 / 1024).toFixed(2)} MB</p>
        <p><strong>Submitted At:</strong> ${new Date(submissionData.submittedAt).toLocaleString()}</p>
      `,
    }

    // For now, we'll log the email data - in production, you'd integrate with an email service
    console.log("Email notification would be sent:", emailData)

    // TODO: Integrate with actual email service like Resend, SendGrid, or Nodemailer
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send(emailData)

    return true
  } catch (error) {
    console.error("Failed to send email notification:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract form fields
    const artistName = formData.get("artistName") as string
    const email = formData.get("email") as string
    const trackTitle = formData.get("trackTitle") as string
    const genre = formData.get("genre") as string
    const description = formData.get("description") as string
    const socialMedia = formData.get("socialMedia") as string
    const previousWork = formData.get("previousWork") as string
    const additionalInfo = formData.get("additionalInfo") as string

    // Get the uploaded file
    const file = formData.get("demoFile") as File

    if (!file) {
      return NextResponse.json({ error: "No demo file provided" }, { status: 400 })
    }

    if (!artistName || !email || !trackTitle) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create a unique filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
    const filename = `demos/${timestamp}-${artistName.replace(/\s+/g, "-")}-${file.name}`

    // Upload to Vercel Blob
    const blob = await put(filename, file, {
      access: "public",
    })

    const submissionData = {
      artistName,
      email,
      trackTitle,
      genre,
      description,
      socialMedia,
      previousWork,
      additionalInfo,
      filename: file.name,
      fileSize: file.size,
      submittedAt: new Date().toISOString(),
    }

    await sendDemoNotificationEmail(submissionData, blob.url)

    return NextResponse.json({
      success: true,
      message: "Demo submitted successfully!",
      submission: {
        ...submissionData,
        fileUrl: blob.url,
      },
    })
  } catch (error) {
    console.error("Demo submission error:", error)
    return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 })
  }
}
