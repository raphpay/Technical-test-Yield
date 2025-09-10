import { Button, View } from "react-native";
import tw from "../../components/tailwind";
import YieldImagePicker from "../../components/YieldImagePicker";
import useDashboard from "../../hooks/dashboard/useDashboard";

export default function Dashboard() {
  const { handleLogout } = useDashboard();

  return (
    <View style={tw`flex-1 bg-gray-100 items-center justify-center`}>
      <Button color={"red"} title="Se déconnecter" onPress={handleLogout} />
      <YieldImagePicker />
    </View>
  );
}
