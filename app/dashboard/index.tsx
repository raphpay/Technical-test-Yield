import { Button, FlatList, Image, Text, View } from "react-native";
import tw from "../../components/tailwind";
import useDashboard from "../../hooks/dashboard/useDashboard";

export default function Dashboard() {
  const { photos, handleLogout } = useDashboard();

  return (
    <View style={tw`flex-1 bg-gray-100 items-center justify-center`}>
      <Button color={"red"} title="Se déconnecter" onPress={handleLogout} />

      <FlatList
        keyExtractor={(item) => item.id}
        data={photos}
        renderItem={({ item }) => (
          <View style={tw`w-full h-full bg-blue-600`}>
            <Image source={{ uri: item.url }} />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
