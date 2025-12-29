import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import { useLogin } from "../hooks/useLogin";
import { loginSchema, type LoginFormData } from "../components/loginSchema";
import type { ApiErrorResponse } from "../../types/auth.type";

export const useLoginForm = () => {
	const { login, isLoading } = useLogin();
	const [loginError, setLoginError] = useState<string | null>(null);

	// Obtener el parámetro de redirección de la URL
	const searchParams = new URLSearchParams(window.location.search);
	const redirectTo = searchParams.get('redirect') || '/dashboard';

	const form = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			correo_electronico: "",
			password: "",
		},
		mode: "onBlur",
	});

	/**
	 * Mapea el código de error HTTP a un mensaje amigable
	 */
	const getErrorMessage = (error: AxiosError<ApiErrorResponse>): string => {
		if (error.response?.status === 401) {
			return "Credenciales incorrectas. Verifique su correo y contraseña.";
		}

		if (error.response?.status === 400) {
			return "Datos inválidos. Por favor, verifique los campos.";
		}

		if (error.response?.status === 403) {
			return "Cuenta inactiva o sin permisos de acceso.";
		}

		if (error.response?.status === 500) {
			return "Error del servidor. Intente más tarde.";
		}

		if (error.message) {
			return error.message;
		}

		return "Error al iniciar sesión. Por favor, intente nuevamente.";
	};

	/**
	 * Maneja el envío del formulario
	 */
	const onSubmit = async (data: LoginFormData) => {
		try {
			setLoginError(null);

			await login(data);

			toast.success("Inicio de sesión exitoso", {
				description: "Redirigiendo...",
			});

			// Navegar a la ruta original o al dashboard
			window.location.href = redirectTo;
		} catch (error) {
			const errorMessage = getErrorMessage(
				error as AxiosError<ApiErrorResponse>,
			);

			setLoginError(errorMessage);
			toast.error("Error de autenticación", {
				description: errorMessage,
			});
		}
	};

	return {
		form,
		isLoading,
		loginError,
		onSubmit,
	};
};
