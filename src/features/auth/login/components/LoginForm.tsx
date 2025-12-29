import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { useLoginForm } from "../hooks/useLoginForm";

const LoginForm = () => {
  const { form, isLoading, loginError, onSubmit } = useLoginForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-4">
        <div className="flex flex-col gap-4">
          <img
            src="/logo_cl.png"
            alt="logo"
            className="w-25 h-25 ml-4 mt-2 self-center"
          />
          <div className="flex flex-col items-center text-center">
            <h1 className="text-xl text-muted-foreground font-medium">
              Sistema de Formularios
            </h1>
            <p className="text-balance text-muted-foreground mt-4 mb-2 text-sm">
              Por favor ingrese credenciales para acceder.
            </p>
          </div>

          {/* Mensaje de error general */}
          {loginError && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md border border-destructive/20">
              {loginError}
            </div>
          )}

          {/* Campo de correo electrónico */}
          <FormField
            control={form.control}
            name="correo_electronico"
            render={({ field }) => (
              <FormItem className="gap-1">
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo de contraseña */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Botón de login */}
          <Button
            type="submit"
            variant="primario"
            className="w-full rounded-sm mt-1"
            disabled={isLoading}
          >
            {isLoading ? "Ingresando..." : "Ingresar"}
          </Button>

          <div className="mt-4 relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              O inicia sesión con:
            </span>
          </div>

          {/* Botón de Clave Única */}
          <div className="flex justify-center">
            <Button
              type="button"
              variant="primario"
              className="bg-primary-400"
              disabled={isLoading}
            >
              <img
                src="/clave_unica.svg"
                alt="clave unica"
                className="w-20 h-20"
              />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export { LoginForm };
