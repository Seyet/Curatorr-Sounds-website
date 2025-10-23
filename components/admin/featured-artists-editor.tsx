"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Trash2, Edit2, Save, X } from "lucide-react"

interface FeaturedArtist {
  id: string
  name: string
  genre: string
  image: string
  url: string
}

export default function FeaturedArtistsEditor() {
  const [artists, setArtists] = useState<FeaturedArtist[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState<Partial<FeaturedArtist>>({})

  useEffect(() => {
    loadArtists()
  }, [])

  const loadArtists = async () => {
    try {
      const response = await fetch("/api/admin/featured-artists")
      const data = await response.json()
      setArtists(data.artists || [])
    } catch (error) {
      console.error("Error loading artists:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (artist: FeaturedArtist) => {
    setEditingId(artist.id)
    setFormData(artist)
  }

  const handleAdd = () => {
    setIsAdding(true)
    setFormData({
      name: "",
      genre: "",
      image: "",
      url: "",
    })
  }

  const handleSave = async () => {
    try {
      const endpoint = editingId ? `/api/admin/featured-artists/${editingId}` : "/api/admin/featured-artists"
      const method = editingId ? "PUT" : "POST"

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        await loadArtists()
        setEditingId(null)
        setIsAdding(false)
        setFormData({})
      }
    } catch (error) {
      console.error("Error saving artist:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this artist?")) return

    try {
      const response = await fetch(`/api/admin/featured-artists/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        await loadArtists()
      }
    } catch (error) {
      console.error("Error deleting artist:", error)
    }
  }

  const handleCancel = () => {
    setEditingId(null)
    setIsAdding(false)
    setFormData({})
  }

  if (isLoading) {
    return <div className="text-center py-8 text-muted-foreground">Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Featured Artists</h2>
          <p className="text-muted-foreground">Manage featured artist roster</p>
        </div>
        {!isAdding && !editingId && (
          <Button onClick={handleAdd} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Artist
          </Button>
        )}
      </div>

      {/* Add/Edit Form */}
      {(isAdding || editingId) && (
        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input
                    value={formData.name || ""}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Artist name"
                    className="bg-background text-foreground border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Genre</label>
                  <Input
                    value={formData.genre || ""}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    placeholder="e.g., Afrobeat"
                    className="bg-background text-foreground border-border"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Image URL</label>
                <Input
                  value={formData.image || ""}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://..."
                  className="bg-background text-foreground border-border"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Spotify/Profile URL</label>
                <Input
                  value={formData.url || ""}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="https://..."
                  className="bg-background text-foreground border-border"
                />
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={handleSave} className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button onClick={handleCancel} variant="outline" className="border-border bg-transparent">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Artists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {artists.map((artist) => (
          <Card key={artist.id} className="bg-card border-border overflow-hidden">
            <img src={artist.image || "/placeholder.svg"} alt={artist.name} className="w-full h-40 object-cover" />
            <CardContent className="pt-4">
              <h3 className="font-bold text-foreground">{artist.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{artist.genre}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(artist)} className="flex-1 border-border">
                  <Edit2 className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDelete(artist.id)}
                  className="border-border text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
