import { useQuery } from "@tanstack/react-query";
import type { GetUsersParams } from "../types/user.type";
import { getUsers } from "../services/users.service";

export const useGetUsers = (params?: GetUsersParams) => {
	return useQuery({
		queryKey: ["users", params],
		queryFn: async () => {
			try {
				const result = await getUsers(params);
				console.log("GetUsers response:", result);
				return result;
			} catch (error) {
				console.error("GetUsers error:", error);
				throw error;
			}
		},
		staleTime: 5 * 60 * 1000,
		retry: 1,
	});
};
