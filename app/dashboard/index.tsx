import { Text, View } from "react-native";
import tw from "../../components/tailwind";

export default function Dashboard() {
  return (
    <View style={tw`flex-1 bg-gray-100 items-center justify-center`}>
      <Text>Dashboard</Text>
    </View>
  );
}
