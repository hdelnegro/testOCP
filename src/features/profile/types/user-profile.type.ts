/**
 * TIPOS BASE REUTILIZABLES
 * Entidades comunes que se repiten en el response de usuario
 */
export interface BaseEntity {
	id: number;
	nombre: string;
	descripcion: string;
}

export interface Rol extends BaseEntity {}
export interface Division extends BaseEntity {}
export interface Departamento extends BaseEntity {}
export interface Unidad extends BaseEntity {}

export interface UserProfile {
	id: number;
	nombre_completo: string;
	correo_electronico: string;
	rol_id: number;
	division_id: number;
	departamento_id: number;
	unidad_id: number;
	activo: boolean;
	created_at: string;
	rol: Rol;
	division: Division;
	departamento: Departamento;
	unidad: Unidad;
}

export interface UserProfileResponse {
	success: true;
	user: UserProfile;
}
