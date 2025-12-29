import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../services/users.service";

export const useGetUserById = (id: number, enabled = true) => {
	return useQuery({
		queryKey: ["user", id],
		queryFn: () => getUserById(id),
		enabled: enabled && !!id,
		staleTime: 5 * 60 * 1000,
		retry: 1,
	});
};
