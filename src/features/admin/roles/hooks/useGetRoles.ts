import { useQuery } from "@tanstack/react-query";
import type { GetRolesParams } from "../types/roles.type";
import { getRoles } from "../services/roles.service";

export const useGetRoles = (params?: GetRolesParams) => {
	return useQuery({
		queryKey: ["roles", params],
		queryFn: () => getRoles(params),
		staleTime: 5 * 60 * 1000,
		retry: 1,
	});
};
