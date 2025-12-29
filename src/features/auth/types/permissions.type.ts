export type FormPermission = {
	id: number;
	formulario_id: number;
	titulo: string;
	titulo_id: string;
	descripcion: string;
	tipo_acceso: string;
	activo: boolean;
	created_at: string;
	updated_at: string;
};

export type UserPermissions = {
	userId: number;
	rolId: number;
	rolNombre: string;
	formularios: FormPermission[];
};

export type PermissionsResponse = {
	success: boolean;
	data: UserPermissions;
};
