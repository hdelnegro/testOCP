import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { UpdateRoleRequest } from "../types/roles.type";
import { updateRole } from "../services/roles.service";

export const useUpdateRole = () => {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending, isError, error } = useMutation({
		mutationFn: ({
			id,
			roleData,
		}: {
			id: number;
			roleData: UpdateRoleRequest;
		}) => updateRole(id, roleData),
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ["roles"] });
			queryClient.invalidateQueries({ queryKey: ["role", variables.id] });
			toast.success("Rol actualizado", {
				description: "El rol se ha actualizado correctamente",
			});
		},
		onError: (error: any) => {
			console.error("Update role failed:", error);
			const errorMessage =
				error?.response?.data?.message || "No se pudo actualizar el rol. Intenta de nuevo.";
			toast.error("Error al actualizar", {
				description: errorMessage,
			});
		},
	});

	return {
		updateRole: mutateAsync,
		isLoading: isPending,
		isError,
		error,
	};
};
