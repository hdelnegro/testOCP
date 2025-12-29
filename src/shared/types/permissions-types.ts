/**
 * Tipos para el sistema de permisos con CASL
 */

// Acciones disponibles en el sistema
export type Action = "create" | "read" | "update" | "delete" | "manage" | string;

// Sujetos sobre los que se aplican las acciones
export type Subject =
	| "usuarios"
	| "formularios"
	| "reportes"
	| "proyectos"
	| "all"
	| string;

// Estructura de un permiso individual
export interface Permission {
	action: Action;
	subject: Subject;
	canPerform: boolean;
}
