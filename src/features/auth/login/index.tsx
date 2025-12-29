import { Card, CardContent } from "@/shared/components/ui/card";
import { LoginForm } from "./components/LoginForm";

const LoginPage = () => {
  return (
    <Card className="rounded-md">
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
};

export { LoginPage };
