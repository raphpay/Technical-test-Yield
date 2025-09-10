import { router } from "expo-router";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function useApp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const User = z.object({
    userName: z.string(),
    password: z.string(),
  });

  function onSubmit(data: any) {
    const parsedData = User.parse(data);

    router.navigate("/dashboard");
  }

  return { control, handleSubmit, errors, onSubmit };
}
