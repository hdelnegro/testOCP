import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../services/user-profile.service";

export const useGetUserProfile = () => {
	return useQuery({
		queryKey: ["user"],
		queryFn: () => getUserProfile(),
		enabled: !!localStorage.getItem("token"),
		staleTime: 5 * 60 * 1000,
		retry: false,
	});
};
