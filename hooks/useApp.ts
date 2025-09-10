import { router } from "expo-router";
import { useForm } from "react-hook-form";

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

  function onSubmit(data: any) {
    router.navigate("/dashboard");
  }

  return { control, handleSubmit, errors, onSubmit };
}
