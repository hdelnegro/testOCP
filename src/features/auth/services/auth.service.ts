import { apiClient } from "@/shared/lib/api";
import { API_ENDPOINTS } from "@/shared/lib/constants/api";
import type {
	LoginRequest,
	LoginResponse,
	LogoutResponse,
} from "../types/auth.type";

const loginService = async (
	credentials: LoginRequest,
): Promise<LoginResponse> => {
	const response = await apiClient.post<LoginResponse>(
		API_ENDPOINTS.LOGIN,
		credentials,
	);
	return response.data;
};

const logoutService = async (): Promise<LogoutResponse> => {
	const response = await apiClient.post<LogoutResponse>(API_ENDPOINTS.LOGOUT);
	return response.data;
};

export { loginService, logoutService };
