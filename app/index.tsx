import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "../components/tailwind";

export default function App() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function login() {}

  return (
    <View style={tw`flex-1 bg-gray-100 items-center justify-center`}>
      <View
        style={tw`bg-base-white/60 shadow p-8 rounded-md flex items-center justify-center gap-4`}
      >
        <Text style={tw`text-semibold text-lg text-center`}>
          Bienvenue sur le test technique de Raphaël
        </Text>
        <Text style={tw`text-base`}>Connectez-vous pour en voir plus</Text>

        <TextInput
          value={userName}
          onChange={(e: any) => setUserName(e.target.value)}
          style={tw`w-full h-full p-2 rounded-md border-2 border-gray-600`}
          placeholder="Username"
        />
        <TextInput
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          secureTextEntry={true}
          placeholder="Mot de passe"
          style={tw`w-full h-full p-2 rounded-md border-2 border-gray-600`}
        />
        <TouchableOpacity
          onPress={login}
          style={tw`rounded-md p-2 w-full bg-blue-500`}
        >
          <Text style={tw`text-center`}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={login} style={tw`rounded-md p-2 w-full`}>
          <Text style={tw`text-center underline`}>Créer un compte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
