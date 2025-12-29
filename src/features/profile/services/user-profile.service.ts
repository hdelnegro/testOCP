import { API_ENDPOINTS } from "@/shared/lib/constants/api";
import type { UserProfileResponse } from "../types/user-profile.type";
import { apiClient } from "@/shared/lib/api";

export const getUserProfile = async (): Promise<UserProfileResponse> => {
	const response = await apiClient.get<UserProfileResponse>(
		API_ENDPOINTS.USER_PROFILE,
	);
	return response.data;
};
