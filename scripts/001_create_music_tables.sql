-- Create music_drops table
CREATE TABLE IF NOT EXISTS public.music_drops (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  artist TEXT NOT NULL,
  image_url TEXT,
  release_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create featured_artists table
CREATE TABLE IF NOT EXISTS public.featured_artists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  image_url TEXT,
  bio TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create latest_releases table
CREATE TABLE IF NOT EXISTS public.latest_releases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  artist TEXT NOT NULL,
  image_url TEXT,
  release_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_music_drops_created_at ON public.music_drops(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_featured_artists_created_at ON public.featured_artists(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_latest_releases_created_at ON public.latest_releases(created_at DESC);
