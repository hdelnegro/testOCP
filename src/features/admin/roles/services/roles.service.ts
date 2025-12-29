import { API_ENDPOINTS } from "@/shared/lib/constants/api";
import type {
	CreateRoleRequest,
	CreateRoleResponse,
	GetRolesParams,
	GetRolesResponse,
	GetRoleByIdResponse,
	UpdateRoleRequest,
	UpdateRoleResponse,
	DeleteRoleResponse,
	GetRoleFormulariosParams,
	GetRoleFormulariosResponse,
} from "../types/roles.type";
import { apiClient } from "@/shared/lib/api";

const createRole = async (
	roleData: CreateRoleRequest,
): Promise<CreateRoleResponse> => {
	const response = await apiClient.post<CreateRoleResponse>(
		API_ENDPOINTS.ROLES,
		roleData,
	);
	return response.data;
};

const getRoles = async (params?: GetRolesParams): Promise<GetRolesResponse> => {
	const response = await apiClient.get<GetRolesResponse>(API_ENDPOINTS.ROLES, {
		params,
	});
	return response.data;
};

const getRoleById = async (id: number): Promise<GetRoleByIdResponse> => {
	const response = await apiClient.get<GetRoleByIdResponse>(
		`${API_ENDPOINTS.ROLES}/${id}`,
	);
	return response.data;
};

const updateRole = async (
	id: number,
	roleData: UpdateRoleRequest,
): Promise<UpdateRoleResponse> => {
	const response = await apiClient.put<UpdateRoleResponse>(
		`${API_ENDPOINTS.ROLES}/${id}`,
		roleData,
	);
	return response.data;
};

const deleteRole = async (id: number): Promise<DeleteRoleResponse> => {
	const response = await apiClient.delete<DeleteRoleResponse>(
		`${API_ENDPOINTS.ROLES}/${id}`,
	);
	return response.data;
};

const getRoleFormularios = async (
	id: number,
	params?: GetRoleFormulariosParams,
): Promise<GetRoleFormulariosResponse> => {
	const response = await apiClient.get<GetRoleFormulariosResponse>(
		`${API_ENDPOINTS.ROLES}/${id}/formularios`,
		{ params },
	);
	return response.data;
};

export {
	createRole,
	getRoles,
	getRoleById,
	updateRole,
	deleteRole,
	getRoleFormularios,
};
