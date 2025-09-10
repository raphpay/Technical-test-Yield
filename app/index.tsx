import { Controller } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";
import { makeServer } from "../business-logic/server/server";
import tw from "../components/tailwind";
import useApp from "../hooks/useApp";

if (__DEV__) {
  makeServer({ environment: "development" });
}

export default function App() {
  const { control, handleSubmit, errors, onSubmit } = useApp();

  return (
    <View style={tw`flex-1 bg-gray-100 items-center justify-center`}>
      <View style={tw`flex flex-col p-4 gap-4 rounded-md`}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={tw`w-full h-full p-2 rounded-md border-2 border-gray-600`}
            />
          )}
          name="userName"
        />
        {errors.userName && (
          <Text style={tw`text-red-500`}>This is required.</Text>
        )}

        <Controller
          control={control}
          rules={{
            maxLength: 30,
            minLength: 8,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Mot de passe"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              style={tw`w-full h-full p-2 rounded-md border-2 border-gray-600`}
            />
          )}
          name="password"
        />

        {errors.password && (
          <Text style={tw`text-red-500`}>
            Le mot de passe doit contenir entre 8 et 30 caractères.
          </Text>
        )}

        <Button title="Se connecter" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
