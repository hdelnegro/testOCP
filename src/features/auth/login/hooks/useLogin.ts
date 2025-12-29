import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { LoginRequest } from "../../types/auth.type";
import { loginService } from "../../services/auth.service";
import { getUserProfile } from "@/features/profile/services/user-profile.service";
// import { permissionsService } from "../../services/permissions.service";

export const useLogin = () => {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (credentials: LoginRequest) => loginService(credentials),
		onSuccess: async (response) => {
			const { token } = response;
			if (!token) {
				throw new Error("Token no disponible");
			}
			localStorage.setItem("authToken", token);

			await Promise.all([
				queryClient.prefetchQuery({
					queryKey: ["userProfile"],
					queryFn: () => getUserProfile(),
				}),
				// queryClient.prefetchQuery({
				// 	queryKey: ["permissions"],
				// 	queryFn: () => permissionsService(),
				// }),
			]);

			//     await queryClient.prefetchQuery({
			//   queryKey: ["userPermissions"],
			//   queryFn: () => permissionsService.getPermissions()
			// });
		},
		onError: (error) => {
			console.error("Login failed:", error);
		},
	});

	return { login: mutateAsync, isLoading: isPending };
};
