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
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
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
    title: "KANA",
    artist: "3RDTUNES",
    image: "https://i.postimg.cc/P5d40hQN/unnamed.jpg",
    releaseDate: "Nov 2025",
    genre: "Afro beat",
    url: "https://curatorrsounds.fanlink.tv/kana",
  },
 
  {
    title: "Flow",
    artist: "Habeskid ft Farouqq",
    image: "https://i.postimg.cc/hGpVkdtc/unnamed.jpg",
    releaseDate: "Nov 2025",
    genre: "Afrobeat",
    url: "https://curatorrsounds.fanlink.tv/Flow",
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
    title: "KANA",
    artist: "3RDTUNES",
    image: "https://i.postimg.cc/4x5gTfCB/unnamed.jpg",
    genre: "Afro-beat",
    url: "https://curatorrsounds.fanlink.tv/kana",
  },
   {
    title: "Flow",
    artist: "Habeskid ft Farouqq",
    image: "https://i.postimg.cc/mrD0f7y3/unnamed.jpg",
    genre: "Afro-beat",
    url: "https://curatorrsounds.fanlink.tv/Flow",
  },
   {
    title: "Sè Ló",
    artist: "Dáèmíì",
    image: "https://i.postimg.cc/1Xk94JJZ/unnamed.jpg",
    genre: "Afro-beat",
    url: "https://curatorrsounds.fanlink.tv/Se-lo",
  },
  {
    title: "Hold Me",
    artist: "Mouth",
    image: "https://i.postimg.cc/sf4zzrh5/Image-24.jpg",
    genre: "Afro-beat",
    url: "https://curatorrsounds.fanlink.tv/hold_me",
  },

  {
    title: "Allowance",
    artist: "Loverlee Shanna ft Dharmisco LM",
    image: "https://i.postimg.cc/g2kvY82X/IMG-4475.png",
    genre: "Afro-beat",
    url: "https://curatorrsounds.fanlink.tv/allowance",
  },
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
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/curatorr-sounds-logo.png" alt="CURATORR SOUNDS" className="h-8 sm:h-10 w-auto" />
              <span className="text-lg sm:text-xl font-bold text-foreground">CURATORR</span>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                ABOUT
              </a>
              <a href="#artists" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                ARTISTS
              </a>
              <a
                href="https://linktr.ee/curatorrsounds"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                MUSIC
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                CONTACT
              </a>
            </div>
            <div className="hidden md:block">
              <a href="https://tally.so/r/mVrjLy" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold">
                  SUBMIT DEMO
                </Button>
              </a>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  ABOUT
                </a>
                <a href="#artists" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  ARTISTS
                </a>
                <a
                  href="https://linktr.ee/curatorrsounds"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  MUSIC
                </a>
                <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  CONTACT
                </a>
                <a href="https://tally.so/r/mVrjLy" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full text-sm font-semibold">
                    SUBMIT DEMO
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Dark & Bold */}
      <section className="relative h-screen md:min-h-[600px] bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
          <img
            src="/folk-rock-musician-with-guitar.jpg"
            alt="Independent Artist"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
            AMPLIFYING<br />INDEPENDENT<br />ARTISTS
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Curatorr Sounds distributes your music to over 95+ countries. We amplify your sound.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://linktr.ee/curatorrsounds" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-base w-full sm:w-auto">
                EXPLORE MUSIC
              </Button>
            </a>
            <a href="https://tally.so/r/mVrjLy" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-base w-full sm:w-auto">
                SUBMIT DEMO
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-black mb-3">5+</div>
              <div className="text-lg text-gray-600 font-semibold">ROSTER ARTISTS</div>
            </div>
            <div className="bg-black text-white p-8 sm:p-10 text-center">
              <div className="text-5xl sm:text-6xl font-bold mb-3">50k+</div>
              <div className="text-lg font-semibold">ACTIVE STREAMS</div>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-black mb-3">95+</div>
              <div className="text-lg text-gray-600 font-semibold">COUNTRIES SONGS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Distribution Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-80 sm:h-96 bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="/electronic-music-duo.jpg"
                alt="Digital Distribution"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                DIGITAL<br />DISTRIBUTION<br />REDEFINED
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our distribution framework is built for speed and precision. We don't just push music—we architect a global sonic presence, ensuring your art reaches every corner of the streaming universe.
              </p>
              <a href="https://tally.so/r/mVrjLy" target="_blank" rel="noopener noreferrer">
                <Button className="bg-black text-white hover:bg-gray-800 font-bold text-base">
                  EXPLORE PLATFORM
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Dark with White Text */}
      <section id="about" className="py-16 sm:py-20 px-4 bg-black text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
              HUMAN<br />CURATION
            </h2>
            <div className="text-lg sm:text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                We reject the algorithm. Every artist is hand-selected for sonic merit. Curated by humans. Executed with precision. We believe in the intelligence of taste—that rare intersection where commercial viability meets artistic integrity.
              </p>
              <p>
                Our roster represents more than music—it represents a statement about what independent art can achieve when given the right platform, the right partners, and the right distribution muscle.
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
                                Listen here
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
      <section id="artists" className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 leading-tight">CURRENT ROSTER</h2>
            <p className="text-lg text-gray-600">
              Exceptional talent. Exceptional sound.
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

  {/* Team Section */}
<section id="team" className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30">
  <div className="container mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
      Meet the Team
    </h2>
    <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
      The creative minds behind Curatorr Sounds
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: "Eyinjuoluwa Jubril",
          role: "CEO & Co-Founder",
          email: "boycuratorr@curatorrsounds.com",
          twitter: "https://twitter.com/",
          instagram: "https://instagram.com/",
        },
        {
          name: "Oluwaseyi Oguntusin",
          role: "CTO / Senior VP & Co-Founder",
          email: "loseyi@curatorrsounds.com",
          twitter: "https://twitter.com/",
          instagram: "https://instagram.com/",
        },
        {
          name: "Oghenetega Umukoro",
          role: "Head of Operations",
          email: "tega@curatorrsounds.com",
          twitter: "https://twitter.com/",
          instagram: "https://instagram.com/",
        },
      ].map((member, index) => (
        <Card
          key={index}
          className="group hover:shadow-lg transition-all bg-card border-border"
        >
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center text-primary font-semibold text-xl">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              {member.name}
            </h3>
            <p className="text-muted-foreground mb-1">{member.role}</p>
            <p className="text-sm text-primary/80 mb-4">
              <a
                href={`mailto:${member.email}`}
                className="hover:underline hover:text-primary"
              >
                {member.email}
              </a>
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(member.twitter, "_blank")}
              >
                <Twitter className="h-5 w-5 text-primary hover:text-primary/80" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(member.instagram, "_blank")}
              >
                <Instagram className="h-5 w-5 text-primary hover:text-primary/80" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>



      {/* Mission Statement Section */}
      <section className="py-16 sm:py-20 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
            "WE ARE NOT A LABEL.<br />WE ARE A STATEMENT OF<br />SONIC INTEGRITY."
          </h2>
          <a href="https://tally.so/r/mVrjLy" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-black hover:bg-gray-200 font-bold text-base mt-8">
              JOIN THE ROSTER
            </Button>
          </a>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">Stay Connected</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get updates on new releases, featured artists, and exclusive opportunities.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-100 text-black border-0 placeholder:text-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              className="bg-black text-white hover:bg-gray-800 font-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "..." : "SUBSCRIBE"}
            </Button>
          </form>
          {message && (
            <p className={`mt-4 text-sm ${message.includes("Successfully") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 sm:py-16 px-4 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/curatorr-sounds-logo.png" alt="CURATORR SOUNDS" className="h-6 sm:h-8 w-auto" />
                <span className="text-base sm:text-lg font-bold text-white">CURATORR</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Amplifying independent artists globally.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/curatorr.sounds?igsh=bWQ4cDRtYTRkamVm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
                <a href="https://twitter.com/curatorrsounds" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>

                <WhatsAppButton />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-base sm:text-lg">SERVICES</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Distribution
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Artist Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-base sm:text-lg">EXPLORE</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <a href="#artists" className="hover:text-white transition-colors">
                    Our Artists
                  </a>
                </li>
                <li>
                  <a href="https://linktr.ee/curatorrsounds" target="_blank" className="hover:text-white transition-colors">
                    Music
                  </a>
                </li>
                <li>
                  <a href="https://tally.so/r/mVrjLy" target="_blank" className="hover:text-white transition-colors">
                    Submit Demo
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:curatorsoundent@gmail.com?subject=Hello%20Curatorr%20Sounds&body=Hi%20team%2C"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-base sm:text-lg">CONTACT</h3>
              <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="break-all">info@curatorrsounds.com</span>
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
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2025 CURATORR SOUNDS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
