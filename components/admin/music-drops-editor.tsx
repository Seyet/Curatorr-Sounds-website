"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Trash2, Edit2, Save, X } from "lucide-react"

interface MusicDrop {
  id: string
  title: string
  artist: string
  image: string
  releaseDate: string
  genre: string
  url: string
}

export default function MusicDropsEditor() {
  const [drops, setDrops] = useState<MusicDrop[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState<Partial<MusicDrop>>({})

  useEffect(() => {
    loadDrops()
  }, [])

  const loadDrops = async () => {
    try {
      const response = await fetch("/api/admin/music-drops")
      const data = await response.json()
      setDrops(data.drops || [])
    } catch (error) {
      console.error("Error loading drops:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (drop: MusicDrop) => {
    setEditingId(drop.id)
    setFormData(drop)
  }

  const handleAdd = () => {
    setIsAdding(true)
    setFormData({
      title: "",
      artist: "",
      image: "",
      releaseDate: "",
      genre: "",
      url: "",
    })
  }

  const handleSave = async () => {
    try {
      const endpoint = editingId ? `/api/admin/music-drops/${editingId}` : "/api/admin/music-drops"
      const method = editingId ? "PUT" : "POST"

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        await loadDrops()
        setEditingId(null)
        setIsAdding(false)
        setFormData({})
      }
    } catch (error) {
      console.error("Error saving drop:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this music drop?")) return

    try {
      const response = await fetch(`/api/admin/music-drops/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        await loadDrops()
      }
    } catch (error) {
      console.error("Error deleting drop:", error)
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
          <h2 className="text-2xl font-bold text-foreground">Music Drops</h2>
          <p className="text-muted-foreground">Manage current music releases</p>
        </div>
        {!isAdding && !editingId && (
          <Button onClick={handleAdd} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Drop
          </Button>
        )}
      </div>

      {/* Add/Edit Form */}
      {(isAdding || editingId) && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>{editingId ? "Edit Music Drop" : "Add New Music Drop"}</CardTitle>
          </CardHeader>
          <CardContent>
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
                  <label className="text-sm font-medium text-foreground">Release Date</label>
                  <Input
                    value={formData.releaseDate || ""}
                    onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                    placeholder="e.g., Sep 2025"
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

      {/* Drops List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {drops.map((drop) => (
          <Card key={drop.id} className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <img
                  src={drop.image || "/placeholder.svg"}
                  alt={drop.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-foreground">{drop.title}</h3>
                  <p className="text-sm text-muted-foreground">{drop.artist}</p>
                  <p className="text-xs text-muted-foreground">{drop.genre}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" onClick={() => handleEdit(drop)} className="flex-1 border-border">
                  <Edit2 className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDelete(drop.id)}
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
