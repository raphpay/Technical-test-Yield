import Photo, { PhotoInput } from "../server/models/Photo";

/**
 * Fetch the photos from the API
 * @returns An array of Photo
 */
async function getPhotos(): Promise<Photo[]> {
  try {
    const response = await fetch("/api/photos/");
    if (!response.ok) {
      throw new Error(
        `Erreur lors de la récupération des photos: ${response.status}`
      );
    }

    const json = await response.json();
    return json.photos as Photo[];
  } catch (error) {
    throw error;
  }
}

async function addPhoto(payload: PhotoInput): Promise<Photo> {
  try {
    const response = await fetch("/api/photos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(
        `Erreur lors de la publication de la photo: ${response.status}`
      );
    }

    const json = await response.json();
    return json.photo as Photo;
  } catch (error) {
    throw error;
  }
}

export const photoService = { addPhoto, getPhotos };
