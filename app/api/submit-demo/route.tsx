import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"
import Resend from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

async function sendDemoNotificationEmail(submissionData: any, fileUrl: string) {
  try {
    const emailData = {
      from: "CURATORR SOUNDS <noreply@curatorrsounds.com>",
      to: ["curatorsoundent@gmail.com"],
      subject: `New Demo Submission: ${submissionData.trackTitle} by ${submissionData.artistName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">New Demo Submission Received</h2>
          
          <div style="background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #000; margin-top: 0;">Artist Information</h3>
            <p><strong>Artist Name:</strong> ${submissionData.artistName}</p>
            <p><strong>Email:</strong> ${submissionData.email}</p>
            <p><strong>Track Title:</strong> ${submissionData.trackTitle}</p>
            <p><strong>Genre:</strong> ${submissionData.genre}</p>
          </div>

          <div style="background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #000; margin-top: 0;">Track Details</h3>
            <p><strong>Description:</strong> ${submissionData.description || "Not provided"}</p>
            <p><strong>Social Media:</strong> ${submissionData.socialMedia || "Not provided"}</p>
            <p><strong>Previous Work:</strong> ${submissionData.previousWork || "Not provided"}</p>
            <p><strong>Additional Info:</strong> ${submissionData.additionalInfo || "Not provided"}</p>
          </div>

          <div style="background: #000; color: #fff; padding: 20px; margin: 20px 0; border-radius: 8px; text-align: center;">
            <h3 style="color: #fff; margin-top: 0;">Demo File</h3>
            <p><strong>File Size:</strong> ${(submissionData.fileSize / 1024 / 1024).toFixed(2)} MB</p>
            <a href="${fileUrl}" target="_blank" style="display: inline-block; background: #fff; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; margin-top: 10px;">
              🎵 Download Demo File
            </a>
          </div>

          <div style="border-top: 1px solid #ddd; padding-top: 20px; margin-top: 30px; color: #666; font-size: 14px;">
            <p><strong>Submitted At:</strong> ${new Date(submissionData.submittedAt).toLocaleString()}</p>
            <p>This submission was sent from the CURATORR SOUNDS website demo submission form.</p>
          </div>
        </div>
      `,
    }

    const result = await resend.emails.send(emailData)
    console.log("Email sent successfully:", result.id)
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

    const emailSent = await sendDemoNotificationEmail(submissionData, blob.url)

    if (!emailSent) {
      console.warn("Email notification failed, but demo was uploaded successfully")
    }

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
