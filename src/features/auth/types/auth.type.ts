export interface LoginRequest {
	correo_electronico: string;
	password: string;
}

export interface LoginResponse {
	success: boolean;
	message: string;
	token?: string;
	user: User;
}

export interface User {
	id: number;
	nombre_completo: string;
	correo_electronico: string;
	rol_id: number;
	activo: boolean;
}

// Tipo para errores de respuesta del API
export interface ApiErrorResponse {
	message: string;
	error?: string;
	statusCode?: number;
}

export interface LogoutResponse {
	success: boolean;
	message: string;
}
