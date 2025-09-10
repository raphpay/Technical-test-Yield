import { Controller } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";
import tw from "../components/tailwind";
import useApp from "../hooks/useApp";

export default function App() {
  const { control, handleSubmit, errors, onSubmit } = useApp();

  return (
    <View style={tw`flex-1 bg-gray-100 items-center justify-center`}>
      <View style={tw`flex flex-col bg-blue-600 p-4 gap-4 rounded-md`}>
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
        {errors.userName && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Mot de passe"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={tw`w-full h-full p-2 rounded-md border-2 border-gray-600`}
            />
          )}
          name="password"
        />

        <Button title="Se connecter" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
