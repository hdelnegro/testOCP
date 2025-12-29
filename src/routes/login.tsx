import { LoginPage } from "@/features/auth/login";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  beforeLoad: async () => {
    const token = localStorage.getItem('authToken')

    if (token) {
      throw redirect({
        to: '/dashboard',
      })
    }
  },
  component: LoginScreen,
});

function LoginScreen() {
  return (
    <div className="flex flex-col min-h-svh items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-md">
        <LoginPage />
      </div>
    </div>
  );
}
