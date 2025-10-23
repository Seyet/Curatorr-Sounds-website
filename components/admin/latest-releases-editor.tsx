"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Trash2, Edit2, Save, X } from "lucide-react"

interface LatestRelease {
  id: string
  title: string
  artist: string
  image: string
  genre: string
  url: string
}

export default function LatestReleasesEditor() {
  const [releases, setReleases] = useState<LatestRelease[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState<Partial<LatestRelease>>({})

  useEffect(() => {
    loadReleases()
  }, [])

  const loadReleases = async () => {
    try {
      const response = await fetch("/api/admin/latest-releases")
      const data = await response.json()
      setReleases(data.releases || [])
    } catch (error) {
      console.error("Error loading releases:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (release: LatestRelease) => {
    setEditingId(release.id)
    setFormData(release)
  }

  const handleAdd = () => {
    setIsAdding(true)
    setFormData({
      title: "",
      artist: "",
      image: "",
      genre: "",
      url: "",
    })
  }

  const handleSave = async () => {
    try {
      const endpoint = editingId ? `/api/admin/latest-releases/${editingId}` : "/api/admin/latest-releases"
      const method = editingId ? "PUT" : "POST"

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        await loadReleases()
        setEditingId(null)
        setIsAdding(false)
        setFormData({})
      }
    } catch (error) {
      console.error("Error saving release:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this release?")) return

    try {
      const response = await fetch(`/api/admin/latest-releases/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        await loadReleases()
      }
    } catch (error) {
      console.error("Error deleting release:", error)
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
          <h2 className="text-2xl font-bold text-foreground">Latest Releases</h2>
          <p className="text-muted-foreground">Manage latest release tracks</p>
        </div>
        {!isAdding && !editingId && (
          <Button onClick={handleAdd} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Release
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
                  <label className="text-sm font-medium text-foreground">Title</label>
                  <Input
                    value={formData.title || ""}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Song title"
                    className="bg-background text-foreground border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Artist</label>
                  <Input
                    value={formData.artist || ""}
                    onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                    placeholder="Artist name"
                    className="bg-background text-foreground border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Genre</label>
                  <Input
                    value={formData.genre || ""}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    placeholder="e.g., Afrobeat"
                    className="bg-background text-foreground border-border"
                  />
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
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Streaming URL</label>
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

      {/* Releases Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {releases.map((release) => (
          <Card key={release.id} className="bg-card border-border overflow-hidden">
            <img src={release.image || "/placeholder.svg"} alt={release.title} className="w-full h-32 object-cover" />
            <CardContent className="pt-3">
              <h3 className="font-bold text-foreground text-sm line-clamp-2">{release.title}</h3>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-1">{release.artist}</p>
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(release)}
                  className="flex-1 border-border h-8"
                >
                  <Edit2 className="h-3 w-3" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDelete(release.id)}
                  className="border-border text-destructive hover:bg-destructive/10 h-8"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
