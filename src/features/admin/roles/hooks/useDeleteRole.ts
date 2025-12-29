import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRole } from "../services/roles.service";

export const useDeleteRole = () => {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending, isError, error } = useMutation({
		mutationFn: (id: number) => deleteRole(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["roles"] });
		},
		onError: (error) => {
			console.error("Delete role failed:", error);
		},
	});

	return {
		deleteRole: mutateAsync,
		isLoading: isPending,
		isError,
		error,
	};
};
