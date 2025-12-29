// import { useQuery } from "@tanstack/react-query";
// import { permissionsService } from "../../services/permissions.service";

// export const useGetUserPermissions = () => {
// 	const { data, isLoading } = useQuery({
// 		queryKey: ["permissions"],
// 		queryFn: permissionsService,
// 		enabled: !!localStorage.getItem("authToken"),
// 		staleTime: 5 * 60 * 1000,
// 	});
// 	return {
// 		permissions: data,
// 		isLoading,
// 	};
// };
