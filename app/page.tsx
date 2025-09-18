"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Music,
  Award,
  Play,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react"
import { useState, useEffect } from "react"

// ✅ WhatsApp SVG Component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.6 0 .23 5.37.23 11.82c0 2.08.55 4.1 1.6 5.89L0 24l6.43-1.69a11.78 11.78 0 0 0 5.61 1.43h.01c6.45 0 11.82-5.37 11.82-11.82 0-3.16-1.23-6.13-3.35-8.25zM12.05 21.6c-1.8 0-3.56-.48-5.1-1.4l-.36-.21-3.82 1 1.02-3.73-.25-.38a9.61 9.61 0 0 1-1.48-5.13c0-5.31 4.32-9.63 9.63-9.63 2.57 0 4.98 1 6.79 2.8a9.54 9.54 0 0 1 2.83 6.8c0 5.31-4.32 9.63-9.63 9.63zm5.29-7.21c-.29-.14-1.71-.84-1.97-.93-.27-.1-.46-.14-.66.14-.2.29-.76.93-.93 1.12-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.5-.07-.14-.66-1.59-.91-2.18-.24-.58-.48-.5-.66-.51-.17-.01-.36-.01-.55-.01s-.5.07-.76.36c-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .15.19 2.02 3.08 4.9 4.32.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
  </svg>
)

// ✅ Example WhatsApp Button
const WhatsAppButton = () => (
  <Button
    className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
    onClick={() => window.open("https://wa.me/2348061989962", "_blank")} 
  >
    <WhatsAppIcon className="w-5 h-5" />
    
  </Button>
)

export { WhatsAppButton }



const musicDrops = [
  {
    title: "Change Story & Many Thoughts",
    artist: "Dharmisco_lm ft Waziyung",
    image: "https://i.postimg.cc/1X1Mxb20/IMG-4104.png",
    releaseDate: "Sep 2025",
    genre: "Afro beat",
    url: "https://curatorrsounds.fanlink.tv/change-story_and_many-thoughts",
  },
  {
    title: "Body Riddim",
    artist: "Valentino RDM",
    image: "https://i.postimg.cc/kGj0WFXv/IMG-8336.png",
    releaseDate: "Feb 2025",
    genre: "Afro Pop",
    url: "https://curatorrsounds.fanlink.tv/bodyriddim",
  },
  {
    title: "Martell",
    artist: "Habeskid",
    image: "https://i.postimg.cc/901n1J88/IMG-2934.png",
    releaseDate: "May 2025",
    genre: "Afrobeat",
    url: "https://curatorrsounds.fanlink.tv/Martell",
  },
  {
    title: "Ohema & How to please a woman",
    artist: "SOK1E",
    image: "https://i.postimg.cc/SRQFGYdG/245-B301-A-4-E26-44-AD-A80-F-B96290-A8-A887.jpg",
    releaseDate: "Jul 2025",
    genre: "Afro-Pop",
    url: "https://curatorrsounds.lnk.to/ohema-htpaw",
  },
]

const latestReleases = [
  {
    title: "Change Story & Many Thoughts",
    artist: "Dharmisco_Lm Ft Waziyung",
    image: "https://i.postimg.cc/ZYD0F3bv/Image-16.jpg",
    genre: "Afro-beat",
    url: "https://curatorrsounds.fanlink.tv/change-story_and_many-thoughts",
  },
  {
    title: "That Girl",
    artist: "Mouth ft Habeskid",
    image: "https://i.postimg.cc/8kKCdbxv/Image-11.jpg",
    genre: "Afro-beat",
    url: "https://curatorrsounds.fanlink.tv/That-girl",
  },
  {
    title: "Pray",
    artist: "Valentino RDM",
    image: "https://i.postimg.cc/bwy0Dk3D/Image-12.jpg",
    genre: "Afro-Pop",
    url: "https://curatorrsounds.fanlink.tv/Pray",
  },
  {
    title: "Ohema & How to Please a Woman",
    artist: "SOK1E",
    image: "https://i.postimg.cc/tg7hDy09/Image-13.jpg",
    genre: "Afro-Pop",
    url: "https://curatorrsounds.lnk.to/ohema-htpaw",
  },
  {
    title: "Sisi Aminatu",
    artist: "Yioye ft Yabazzi",
    image: "https://i.postimg.cc/gkjpsBSG/Image-19.jpg",
    genre: "Afro-Pop",
    url: "https://curatorrsounds.fanlink.tv/sisi-aminatu",
  },
  {
    title: "Martell",
    artist: "Habeskid",
    image: "https://i.postimg.cc/rsMWfwdV/Image14.jpg",
    genre: "Afro-beat",
    url: "https://curatorrsounds.fanlink.tv/Martell",
  },
]

export default function MusicPublisherHome() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % musicDrops.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + musicDrops.length) % musicDrops.length)
  }

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setMessage("Successfully subscribed!")
      setEmail("")
    } catch (error) {
      console.error("Subscription error:", error)
      setMessage("Failed to subscribe. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % musicDrops.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/curatorr-sounds-logo.png" alt="CURATORR SOUNDS" className="h-8 sm:h-10 w-auto" />
              <span className="text-lg sm:text-xl font-bold text-foreground">CURATORR SOUNDS</span>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#artists" className="text-foreground hover:text-primary transition-colors">
                Artists
              </a>
              <a
                href="https://linktr.ee/curatorrsounds"
                className="text-foreground hover:text-primary transition-colors"
              >
                Catalog
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <div className="hidden md:block">
              <a href="https://tally.so/r/mVrjLy" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Submit Demo</Button>
              </a>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#about" className="text-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#artists" className="text-foreground hover:text-primary transition-colors">
                  Artists
                </a>
                <a
                  href="https://linktr.ee/curatorrsounds"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Catalog
                </a>
                <a href="#services" className="text-foreground hover:text-primary transition-colors">
                  Services
                </a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </a>
                <a href="https://tally.so/r/mVrjLy" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">Submit Demo</Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Amplifying Independent <span className="text-primary">Artists</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty">
            We discover, develop, and distribute exceptional music from independent artists worldwide. Your sound
            deserves to be heard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://linktr.ee/curatorrsounds" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                <Play className="mr-2 h-5 w-5" />
                Explore Catalog
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent w-full sm:w-auto"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Roaster Artists</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">50k+</div>
              <div className="text-muted-foreground">Streams Generated</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">95+</div>
              <div className="text-muted-foreground">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8">About Us</h2>
            <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4 sm:space-y-6">
              <p className="text-pretty">
                <strong className="text-foreground">CURATORR SOUNDS</strong> is a digital media distribution company
                aimed at serving ease when it comes to Music & Video distribution in digital form to Record Labels,
                Independent Artists within and beyond the borders of Africa.
              </p>
              <p className="text-pretty">
                Tapping into the younger and fast rising demographic of talents, making sure the world gets to hear
                those distinctive sounds is our priority and we're moving closer to that goal everyday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Music Drops slideshow section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Current Music Drops</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Fresh releases from our talented roster
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {musicDrops.map((drop, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="bg-card border-border">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                          <div className="relative">
                            <img
                              src={drop.image || "/placeholder.svg"}
                              alt={drop.title}
                              className="w-full h-full sm:h-80 md:h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <Button className="bg-primary text-primary-foreground">
                                <Play className="h-5 w-5 mr-2" />
                                Play Now
                              </Button>
                            </div>
                          </div>
                          <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                            <Badge variant="secondary" className="w-fit mb-3 sm:mb-4 bg-accent text-accent-foreground">
                              {drop.genre}
                            </Badge>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-card-foreground mb-2">
                              {drop.title}
                            </h3>
                            <p className="text-lg sm:text-xl text-muted-foreground mb-3 sm:mb-4">by {drop.artist}</p>
                            <p className="text-sm text-muted-foreground mb-4 sm:mb-6">Released {drop.releaseDate}</p>
                            <a href={drop.url} target="_blank" rel="noopener noreferrer">
                              <Button className="w-full sm:w-fit bg-primary text-primary-foreground hover:bg-primary/90">
                                Listen on Spotify
                              </Button>
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border"
              onClick={() => {
                prevSlide()
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 5000)
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border"
              onClick={() => {
                nextSlide()
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 5000)
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="flex justify-center mt-6 space-x-2">
              {musicDrops.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 5000)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section id="artists" className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Artists</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the incredible talent in our roster
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Valentino RDM",
                genre: "Afro Pop",
                image: "https://i.postimg.cc/WpGTNYQm/Image-5.jpg",
                url: "https://open.spotify.com/artist/6Rbxf3J1zqXycVA6dcl8pK?si=MdC7cDizQEur3q0oPTcsNg",
              },
              {
                name: "Habeskid",
                genre: "Afrobeat",
                image: "https://i.postimg.cc/wvJHsw3p/Image-6.jpg",
                url: "https://open.spotify.com/artist/6JubhE6zndqvbg0bF2Sr4n?si=X-dmxJrqRmSZYYLShE4O9Q",
              },
              {
                name: "Mouth",
                genre: "Afrobeat",
                image: "https://i.postimg.cc/RCyVhnF9/Image-7.jpg",
                url: "https://open.spotify.com/artist/013oY0qCSOaGG9xyaSg3wB?si=OrJX9RZ8SXOGaKTESxSo5Q",
              },
              {
                name: "Renay",
                genre: "Afro-Fusion",
                image: "https://i.postimg.cc/Px2mB5Kb/Image-20.jpg",
                url: "https://open.spotify.com/artist/7wN4hPyUsATGf8ZF5RC8YW?si=88U5twyQRwutlObq1dDOjw",
              },
              {
                name: "Dharmisco_lm",
                genre: "Afro-beat",
                image: "https://i.postimg.cc/8CyRqznP/Image-9.jpg",
                url: "https://open.spotify.com/artist/5I48g4GCWfT4ECAZ7umM2O?si=uKwmj5QGTbGGfXT0L1GS3A",
              },
              {
                name: "SOK1E",
                genre: "Afro-Pop",
                image: "https://i.postimg.cc/pX6tXfhD/Image-10.jpg",
                url: "https://open.spotify.com/artist/6v6M5rmRPJDfahY6OAFCeT?si=Sc3CGWztQqWeYPPG6wTnWw",
              },
            ].map((artist, index) => (
              <a key={index} href={artist.url} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="group hover:shadow-lg transition-all duration-300 bg-card border-border cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        className="w-full h-full sm:h-fit md:h-fit object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button size="sm" className="bg-primary text-primary-foreground">
                          <Play className="h-4 w-4 mr-2" />
                          Listen
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2">{artist.name}</h3>
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {artist.genre}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Releases section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Releases</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the newest tracks from our artists
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {latestReleases.map((release, index) => (
              <a key={index} href={release.url} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="group hover:shadow-lg transition-all duration-300 bg-white border-gray-200 cursor-pointer relative z-10">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={release.image || "/placeholder.svg"}
                        alt={release.title}
                        className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button size="sm" className="bg-primary text-primary-foreground">
                          <Play className="h-4 w-4 mr-2" />
                          Play
                        </Button>
                      </div>
                    </div>
                    <div className="p-3 sm:p-4 bg-white relative z-10">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 line-clamp-2 relative z-10">
                        {release.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-1 relative z-10">
                        {release.artist}
                      </p>
                      <Badge variant="outline" className="text-xs border-gray-300 text-gray-700 bg-white relative z-10">
                        {release.genre}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-12 sm:py-16 md:py-20 px-4 bg-card border-border hover:shadow-lg transition-shadow"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for independent artists
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 justify-center">
            {[
              {
                icon: <Music className="h-10 sm:h-12 w-10 sm:w-12 text-primary" />,
                title: "Music Distribution",
                description: "Get your music on all major streaming platforms and digital stores worldwide.",
              },
              {
                icon: <Award className="h-10 sm:h-12 w-10 sm:w-12 text-primary" />,
                title: "Marketing & Promotion",
                description: "Strategic campaigns to amplify your music and build your fanbase.",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center bg-background border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-3 sm:mb-4">{service.icon}</div>
                  <CardTitle className="text-foreground text-lg sm:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-background mb-4">Stay in the Loop</h2>
          <p className="text-lg sm:text-xl text-background/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get the latest updates on new releases, artist spotlights, and industry insights.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background text-foreground border-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              className="bg-background text-foreground hover:bg-background/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          {message && (
            <p className={`mt-4 text-sm ${message.includes("Successfully") ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 sm:py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/curatorr-sounds-logo.png" alt="CURATORR SOUNDS" className="h-6 sm:h-8 w-auto" />
                <span className="text-base sm:text-lg font-bold text-foreground">CURATORR SOUNDS</span>
              </div>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                Empowering independent artists to reach their full potential.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/curatorr.sounds?igsh=bWQ4cDRtYTRkamVm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </a>
                <a href="https://twitter.com/curatorrsounds" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </a>
              
                  <WhatsAppButton />
    
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4 text-base sm:text-lg">Services</h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Music Distribution
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Artist Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sync Licensing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4 text-base sm:text-lg">Resources</h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Artist Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4 text-base sm:text-lg">Contact</h3>
              <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="break-all">curatorsoundent@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+234 806 198 9962</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>Lagos, NG</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-muted-foreground text-sm sm:text-base">
            <p>&copy; 2025 Curatorr Sounds . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
