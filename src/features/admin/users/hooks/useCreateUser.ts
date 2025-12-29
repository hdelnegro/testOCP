import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { CreateUserRequest } from "../types/user.type";
import { createUser } from "../services/users.service";

export const useCreateUser = () => {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending, isError, error } = useMutation({
		mutationFn: (userData: CreateUserRequest) => createUser(userData),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
			toast.success("Usuario creado", {
				description: "El usuario ha sido creado exitosamente.",
			});
		},
		onError: (error: any) => {
			console.error("Create user failed:", error);
			toast.error("Error al crear usuario", {
				description:
					error?.response?.data?.message ||
					"No se pudo crear el usuario. Por favor, intenta de nuevo.",
			});
		},
	});

	return {
		createUser: mutateAsync,
		isLoading: isPending,
		isError,
		error,
	};
};
