"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut, Music, Users, Disc3 } from "lucide-react"
import AdminLogin from "@/components/admin/admin-login"
import MusicDropsEditor from "@/components/admin/music-drops-editor"
import FeaturedArtistsEditor from "@/components/admin/featured-artists-editor"
import LatestReleasesEditor from "@/components/admin/latest-releases-editor"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if admin is already authenticated
    const token = localStorage.getItem("admin_token")
    if (token) {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("admin_token")
    setIsAuthenticated(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/curatorr-sounds-logo.png" alt="CURATORR SOUNDS" className="h-8 w-auto" />
              <span className="text-lg font-bold text-foreground">Admin Dashboard</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="flex items-center gap-2 bg-transparent"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Content Management</h1>
          <p className="text-muted-foreground">Manage music drops, featured artists, and latest releases</p>
        </div>

        <Tabs defaultValue="drops" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="drops" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span className="hidden sm:inline">Music Drops</span>
            </TabsTrigger>
            <TabsTrigger value="artists" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Featured Artists</span>
            </TabsTrigger>
            <TabsTrigger value="releases" className="flex items-center gap-2">
              <Disc3 className="h-4 w-4" />
              <span className="hidden sm:inline">Latest Releases</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="drops">
            <MusicDropsEditor />
          </TabsContent>

          <TabsContent value="artists">
            <FeaturedArtistsEditor />
          </TabsContent>

          <TabsContent value="releases">
            <LatestReleasesEditor />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
