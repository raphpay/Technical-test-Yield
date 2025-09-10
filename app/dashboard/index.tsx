import { Button, FlatList, Image, Text, View } from "react-native";
import tw from "../../components/tailwind";
import useDashboard from "../../hooks/dashboard/useDashboard";

export default function Dashboard() {
  const { photos, loading, handleLogout, handleAddPhoto } = useDashboard();

  if (loading) return <Text>Chargement...</Text>;

  return (
    <View style={tw`flex-1 bg-gray-100 gap-4 items-center justify-center`}>
      <Button color={"red"} title="Se déconnecter" onPress={handleLogout} />
      <Button title="Ajouter une photo" onPress={handleAddPhoto} />

      <FlatList
        style={tw`grid grid-cols-2`}
        keyExtractor={(item) => item.id}
        data={photos}
        renderItem={({ item }) => (
          <View style={tw`w-full h-full m-4`}>
            <Image source={{ uri: item.url }} style={tw`h-[200px] w-[200px]`} />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
