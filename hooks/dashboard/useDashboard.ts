import { router } from "expo-router";

export default function useDashboard() {
  function handleLogout() {
    router.navigate("/");
  }

  return {
    handleLogout,
  };
}
