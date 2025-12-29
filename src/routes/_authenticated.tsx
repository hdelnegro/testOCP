import { createFileRoute, redirect } from "@tanstack/react-router";
import MainLayout from "@/layouts/MainLayout";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: MainLayout,
});
