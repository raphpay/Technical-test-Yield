import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Platform } from "react-native";

export default function useYieldImagePicker() {
  const [image, setImage] = useState<string | null>(null);

  async function pickImage() {
    if (Platform.OS !== "web") {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        base64: true,
      });

      if (!result.canceled && result.assets) {
        const base64 = result.assets[0].base64;
        const base64ToUpload = `data:image/jpeg;base64,${base64}`;
        setImage(base64ToUpload);
      }
    }
  }

  return {
    image,
    pickImage,
  };
}
