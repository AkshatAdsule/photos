import photoMetadata from "./photo_metadata.json";

export interface Photo {
  id: number;
  title: string;
  slug: string;
  src: string;
  description: string;
  date: string;
  location: string;
  type: "portrait" | "landscape";
}

interface PhotoMetadata {
  filename: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  location: string;
  is_landscape: boolean;
}

export const photos: Photo[] = (photoMetadata as PhotoMetadata[]).map((photo, index) => ({
  id: index + 1,
  title: photo.title,
  slug: photo.slug,
  src: `/photos/${photo.filename}`,
  description: photo.description,
  date: photo.date,
  location: photo.location,
  type: photo.is_landscape ? "landscape" : "portrait",
}));

export function getPhotoBySlug(slug: string): Photo | undefined {
  return photos.find((photo) => photo.slug === slug);
}

