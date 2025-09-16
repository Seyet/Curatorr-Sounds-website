"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Music, User, FileText, ArrowLeft } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function SubmitDemo() {
  const [formData, setFormData] = useState({
    artistName: "",
    email: "",
    phone: "",
    songTitle: "",
    genre: "",
    releaseDate: "",
    description: "",
    socialLinks: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, genre: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setMessage(
        "Demo submitted successfully! We'll review your submission and get back to you within 5-7 business days.",
      )
      setFormData({
        artistName: "",
        email: "",
        phone: "",
        songTitle: "",
        genre: "",
        releaseDate: "",
        description: "",
        socialLinks: "",
      })
    } catch (error) {
      setMessage("Failed to submit demo. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/curatorr-sounds-logo.png" alt="CURATORR SOUNDS" className="h-8 sm:h-10 w-auto" />
              <span className="text-lg sm:text-xl font-bold text-foreground">CURATORR SOUNDS</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Submit Your <span className="text-primary">Demo</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Ready to share your music with the world? Submit your demo and let us help amplify your sound.
          </p>
        </div>
      </section>

      {/* Submit Form Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center space-x-2">
                <Music className="h-6 w-6 text-primary" />
                <span>Demo Submission Form</span>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below to submit your demo for review
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Artist Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                    <User className="h-5 w-5 text-primary" />
                    <span>Artist Information</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="artistName">Artist/Band Name *</Label>
                      <Input
                        id="artistName"
                        name="artistName"
                        value={formData.artistName}
                        onChange={handleInputChange}
                        placeholder="Your artist or band name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                </div>

                {/* Track Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                    <Music className="h-5 w-5 text-primary" />
                    <span>Track Information</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="songTitle">Song Title *</Label>
                      <Input
                        id="songTitle"
                        name="songTitle"
                        value={formData.songTitle}
                        onChange={handleInputChange}
                        placeholder="Your song title"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="genre">Genre *</Label>
                      <Select onValueChange={handleSelectChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select genre" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="afrobeat">Afrobeat</SelectItem>
                          <SelectItem value="afro-pop">Afro-Pop</SelectItem>
                          <SelectItem value="afro-fusion">Afro-Fusion</SelectItem>
                          <SelectItem value="hip-hop">Hip-Hop</SelectItem>
                          <SelectItem value="r&b">R&B</SelectItem>
                          <SelectItem value="reggae">Reggae</SelectItem>
                          <SelectItem value="gospel">Gospel</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="releaseDate">Planned Release Date</Label>
                    <Input
                      id="releaseDate"
                      name="releaseDate"
                      type="date"
                      value={formData.releaseDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Demo Upload */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                    <Upload className="h-5 w-5 text-primary" />
                    <span>Demo Upload</span>
                  </h3>

                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Drag and drop your demo file here, or click to browse</p>
                    <p className="text-sm text-muted-foreground mb-4">Supported formats: MP3, WAV, FLAC (Max 50MB)</p>
                    <Button type="button" variant="outline">
                      Choose File
                    </Button>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Additional Information</span>
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="description">Tell us about your music *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your music style, influences, and what makes you unique..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="socialLinks">Social Media Links</Label>
                    <Textarea
                      id="socialLinks"
                      name="socialLinks"
                      value={formData.socialLinks}
                      onChange={handleInputChange}
                      placeholder="Instagram, Spotify, YouTube, etc. (one per line)"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting Demo..." : "Submit Demo"}
                  </Button>
                </div>

                {/* Success/Error Message */}
                {message && (
                  <div
                    className={`p-4 rounded-lg text-center ${
                      message.includes("successfully")
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">Submission Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">What We're Looking For</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Original, high-quality music</p>
                <p>• Professional production standards</p>
                <p>• Unique artistic vision</p>
                <p>• Commercial potential</p>
                <p>• Commitment to your craft</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Review Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Initial review within 5-7 business days</p>
                <p>• A&R team evaluation</p>
                <p>• Feedback provided for all submissions</p>
                <p>• Follow-up meeting if interested</p>
                <p>• Contract discussion for selected artists</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/curatorr-sounds-logo.png" alt="CURATORR SOUNDS" className="h-6 w-auto" />
            <span className="text-lg font-bold text-foreground">CURATORR SOUNDS</span>
          </div>
          <p className="text-muted-foreground mb-4">Empowering independent artists to reach their full potential.</p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="mailto:curatorsoundent@gmail.com" className="hover:text-primary transition-colors">
              curatorsoundent@gmail.com
            </a>
            <span>•</span>
            <a href="tel:+2348061989962" className="hover:text-primary transition-colors">
              +234 806 198 9962
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
