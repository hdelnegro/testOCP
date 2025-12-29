import type { PaginationMeta } from "@/features/admin/users/types/user.type";

export interface ActivityLog {
  id: number;
  accion: string;
  entidad: string;
  entidad_id: number;
  descripcion: string;
  fecha: string;
  usuario: {
    id: number;
    nombre_completo: string;
    correo_electronico: string;
  };
}

export interface GetActivityLogsParams {
  page?: number;
  limit?: number;
  fecha_desde?: string;
  fecha_hasta?: string;
  usuario_id?: string;
}

export interface GetActivityLogsResponse {
  success: boolean;
  message: string;
  data: ActivityLog[];
  pagination: PaginationMeta;
}

export interface GetActivityLogByIdResponse {
  success: boolean;
  message: string;
  data: ActivityLog;
}
