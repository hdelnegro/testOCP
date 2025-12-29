import { useQuery } from "@tanstack/react-query";
import { getRoleById } from "../services/roles.service";

export const useGetRoleById = (id: number, enabled = true) => {
	return useQuery({
		queryKey: ["role", id],
		queryFn: () => getRoleById(id),
		enabled: enabled && !!id,
		staleTime: 5 * 60 * 1000,
		retry: 1,
	});
};
