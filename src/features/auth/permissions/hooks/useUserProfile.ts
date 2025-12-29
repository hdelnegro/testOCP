import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/features/profile/services/user-profile.service";

export const useUserProfile = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["userProfile"],
		queryFn: getUserProfile,
		enabled: !!localStorage.getItem("authToken"),
		staleTime: 5 * 60 * 1000,
		retry: 1,
	});

	return {
		user: data?.user,
		isLoading,
		error,
	};
};
