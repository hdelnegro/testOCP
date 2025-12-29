import type { Rol } from "@/features/profile/types/user-profile.type";

/**
 * TIPOS PARA GESTIÓN DE USUARIOS
 */
//NO tiene tipado de reponse en swagger
export interface User {
	id: number;
	nombre_completo: string;
	correo_electronico: string;
	rol_id: number;
	activo: boolean;
	created_at: string;
	rol?: Rol;
}

export interface CreateUserRequest {
	nombre_completo: string;
	correo_electronico: string;
	password: string;
	rol_id: number;
}

export interface CreateUserResponse {
	success: boolean;
	message?: string;
	data?: User;
}

export interface GetUsersParams {
	page?: number;
	limit?: number;
	search?: string;
	rol_id?: number;
	activo?: boolean;
}

export interface PaginationMeta {
	page: number;
	limit: number;
	total: number;
	totalPages: number;
}

export interface GetUsersResponse {
	success: boolean;
	data: User[];
	pagination: PaginationMeta;
}

export interface GetUserByIdResponse {
	success: boolean;
	user: User;
}

export interface UpdateUserRequest {
	nombre_completo: string;
	correo_electronico: string;
	password?: string;
	rol_id: number;
	activo: boolean;
}

export interface UpdateUserResponse {
	success: boolean;
	message: string;
	cambios: string[];
	user: {
		id: number;
		nombre_completo: string;
		correo_electronico: string;
		rol_id: number;
		activo: boolean;
		created_at: string;
	};
}
