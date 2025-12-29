/**
 * TIPOS PARA GESTI�N DE ROLES
 */

export interface Role {
	id: number;
	nombre: string;
	descripcion: string;
	usuarios_count: number;
	created_at: string;
}

export interface RoleUser {
	id: number;
	nombre_completo: string;
	correo_electronico: string;
	activo: boolean;
}

export interface RoleDetail {
	id: number;
	nombre: string;
	descripcion: string;
	usuarios: RoleUser[];
}

export interface GetRolesParams {
	page?: number;
	limit?: number;
	search?: string;
	activo?: boolean;
}

export interface PaginationMeta {
	page: number;
	limit: number;
	total: number;
	total_pages: number;
}

export interface GetRolesResponse {
	success: boolean;
	message: string;
	data: Role[];
	pagination: PaginationMeta;
}

export interface CreateRoleRequest {
	nombre: string;
	descripcion: string;
}

export interface CreateRoleResponse {
	success: boolean;
	message: string;
	data: {
		id: number;
		nombre: string;
		descripcion: string;
	};
}

export interface GetRoleByIdResponse {
	success: boolean;
	message: string;
	data: RoleDetail;
}

export interface UpdateRoleRequest {
	nombre?: string;
	descripcion?: string;
}

export interface UpdateRoleResponse {
	success: boolean;
	message: string;
	data: {
		id: number;
		nombre: string;
		descripcion: string;
	};
}

export interface DeleteRoleResponse {
	success: boolean;
	message: string;
}

/**
 * TIPOS PARA FORMULARIOS DE ROL
 */
export interface RoleFormulario {
	id: number;
	formulario_id: number;
	titulo: string;
	descripcion: string;
	tipo_acceso: string;
	activo: boolean;
	created_at: string;
	updated_at: string;
}

export interface GetRoleFormulariosParams {
	page?: number;
	limit?: number;
	search?: string;
	tipo_acceso?: "lectura" | "escritura";
	activo?: boolean;
}

export interface GetRoleFormulariosResponse {
	success: boolean;
	message: string;
	data: RoleFormulario[];
	pagination: PaginationMeta;
}
