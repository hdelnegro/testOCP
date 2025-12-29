import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutService } from "../../services/auth.service";

export const useLogout = () => {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending } = useMutation({
		mutationFn: () => logoutService(),
		onSuccess: () => {
			queryClient.clear();
			localStorage.removeItem("authToken");
			localStorage.removeItem("authUser");
		},
		onError: (error) => {
			console.error("Logout failed:", error);
		},
	});

	return { logout: mutateAsync, isLoading: isPending };
};
