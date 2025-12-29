import { API_ENDPOINTS } from "@/shared/lib/constants/api";
import type {
	CreateUserRequest,
	CreateUserResponse,
	GetUsersParams,
	GetUsersResponse,
	GetUserByIdResponse,
	UpdateUserRequest,
	UpdateUserResponse,
} from "../types/user.type";
import { apiClient } from "@/shared/lib/api";

const createUser = async (
	userData: CreateUserRequest,
): Promise<CreateUserResponse> => {
	const response = await apiClient.post<CreateUserResponse>(
		API_ENDPOINTS.USERS,
		userData,
	);
	return response.data;
};

const getUsers = async (params?: GetUsersParams): Promise<GetUsersResponse> => {
	const response = await apiClient.get<GetUsersResponse>(API_ENDPOINTS.USERS, {
		params,
	});
	return response.data;
};

const getUserById = async (id: number): Promise<GetUserByIdResponse> => {
	const response = await apiClient.get<GetUserByIdResponse>(
		`${API_ENDPOINTS.USERS}/${id}`,
	);
	return response.data;
};

const updateUser = async (
	id: number,
	userData: UpdateUserRequest,
): Promise<UpdateUserResponse> => {
	const response = await apiClient.put<UpdateUserResponse>(
		`${API_ENDPOINTS.USERS}/${id}`,
		userData,
	);
	return response.data;
};

export { createUser, getUsers, getUserById, updateUser };
