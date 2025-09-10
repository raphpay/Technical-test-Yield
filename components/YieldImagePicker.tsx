import { Image } from "expo-image";
import { Button, View } from "react-native";
import useYieldImagePicker from "../hooks/components/useYieldImagePicker";
import tw from "./tailwind";

export default function YieldImagePicker() {
  const { image, pickImage } = useYieldImagePicker();

  return (
    <View style={tw`flex-1 bg-base-white items-center justify-center`}>
      <Button title="Choisissez une image" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image }}
          alt="image"
          style={tw`w-[100px] h-[100px] bg-blue-500`}
        />
      )}
    </View>
  );
}
