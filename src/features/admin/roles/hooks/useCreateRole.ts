import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { CreateRoleRequest } from "../types/roles.type";
import { createRole } from "../services/roles.service";

export const useCreateRole = () => {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending, isError, error } = useMutation({
		mutationFn: (roleData: CreateRoleRequest) => createRole(roleData),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["roles"] });
			toast.success("Rol creado", {
				description: "El rol se ha creado correctamente",
			});
		},
		onError: (error: any) => {
			console.error("Create role failed:", error);
			const errorMessage =
				error?.response?.data?.message || "No se pudo crear el rol. Intenta de nuevo.";
			toast.error("Error al crear rol", {
				description: errorMessage,
			});
		},
	});

	return {
		createRole: mutateAsync,
		isLoading: isPending,
		isError,
		error,
	};
};
