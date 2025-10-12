export interface Photo {
  id: number;
  title: string;
  slug: string;
  src: string;
  description: string;
  date: string;
  type: "portrait" | "landscape";
}

export const photos: Photo[] = [
  {
    id: 1,
    title: "Golden Sunrise",
    slug: "golden-sunrise",
    src: "https://picsum.photos/seed/1/1200/800",
    description: "The first rays of sunlight breaking through the morning mist, casting a warm golden glow across the landscape.",
    date: "2024-08-15T06:30:00Z",
    type: "landscape",
  },
  {
    id: 2,
    title: "Mountain Vista",
    slug: "mountain-vista",
    src: "https://picsum.photos/seed/2/800/1200",
    description: "Majestic peaks rising above the clouds, captured during a perfect autumn afternoon.",
    date: "2024-09-22T14:45:00Z",
    type: "portrait",
  },
  {
    id: 3,
    title: "Ocean Waves",
    slug: "ocean-waves",
    src: "https://picsum.photos/seed/3/1200/800",
    description: "The rhythmic dance of waves crashing against ancient rocks, nature's timeless symphony.",
    date: "2024-07-10T17:20:00Z",
    type: "landscape",
  },
  {
    id: 4,
    title: "Forest Path",
    slug: "forest-path",
    src: "https://picsum.photos/seed/4/800/1200",
    description: "A winding trail through dense woodland, dappled sunlight filtering through the canopy above.",
    date: "2024-06-05T10:15:00Z",
    type: "portrait",
  },
  {
    id: 5,
    title: "City Lights",
    slug: "city-lights",
    src: "https://picsum.photos/seed/5/1200/800",
    description: "Urban skyline illuminated at twilight, the city awakening with a thousand points of light.",
    date: "2024-10-01T19:30:00Z",
    type: "landscape",
  },
];

export function getPhotoBySlug(slug: string): Photo | undefined {
  return photos.find((photo) => photo.slug === slug);
}

