import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Platform } from "react-native";
import Photo, { PhotoInput } from "../../business-logic/server/models/Photo";
import { photoService } from "../../business-logic/services/PhotoService";

export default function useDashboard() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setIsLoading] = useState<boolean>(false);

  function handleLogout() {
    router.navigate("/");
  }

  async function loadPhotos() {
    setIsLoading(true);
    try {
      const data = await photoService.getPhotos();
      setPhotos(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  }

  async function pickImage() {
    if (Platform.OS !== "web") {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        return result.assets[0].uri;
      }
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        base64: true,
      });

      if (!result.canceled && result.assets) {
        const base64 = result.assets[0].base64;
        const base64ToUpload = `data:image/jpeg;base64,${base64}`;
        return base64ToUpload;
      }
    }
  }

  async function handleAddPhoto() {
    try {
      const image = await pickImage();
      const payload: PhotoInput = {
        title: "New",
        localUri: image,
      };
      const newPhoto = await photoService.addPhoto(payload);
      setPhotos((prev) => [...prev, newPhoto]);
    } catch (error) {}
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
    loading,
    handleAddPhoto,
  };
}
