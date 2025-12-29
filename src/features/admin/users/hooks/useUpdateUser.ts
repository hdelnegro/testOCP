import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { UpdateUserRequest } from "../types/user.type";
import { updateUser } from "../services/users.service";

export const useUpdateUser = () => {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending, isError, error } = useMutation({
		mutationFn: ({
			id,
			userData,
		}: {
			id: number;
			userData: UpdateUserRequest;
		}) => updateUser(id, userData),
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
			queryClient.invalidateQueries({ queryKey: ["user", variables.id] });
			toast.success("Usuario actualizado", {
				description: "Los cambios han sido guardados exitosamente.",
			});
		},
		onError: (error: any) => {
			console.error("Update user failed:", error);
			console.error("Error response:", error?.response);
			console.error("Error data:", error?.response?.data);

			const errorMessage = error?.response?.data?.message
				|| error?.response?.data?.error
				|| error?.message
				|| "No se pudo actualizar el usuario. Por favor, intenta de nuevo.";

			toast.error("Error al actualizar usuario", {
				description: errorMessage,
			});
		},
	});

	return {
		updateUser: mutateAsync,
		isLoading: isPending,
		isError,
		error,
	};
};
