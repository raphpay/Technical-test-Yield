import { router } from "expo-router";
import { useEffect, useState } from "react";
import Photo from "../../business-logic/server/models/Photo";
import { photoService } from "../../business-logic/services/PhotoService";

export default function useDashboard() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  function handleLogout() {
    router.navigate("/");
  }

  async function loadPhotos() {
    try {
      const data = await photoService.getPhotos();
      setPhotos(data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    async function init() {
      loadPhotos();
    }
    init();
  }, []);

  return {
    photos,
    handleLogout,
  };
}
