import { API_ENDPOINTS } from "@/shared/lib/constants/api";
import { apiClient } from "@/shared/lib/api";

export interface Proyecto {
  baseDatos: string;
  COD_PROY: string;
  ALIAS: string;
  NOM_PROY: string;
}

export interface ProyectosResponse {
  success: boolean;
  count: number;
  proyectos: Proyecto[];
}

export interface Lote {
  [key: string]: any;
}

export interface LotesResponse {
  success: boolean;
  data?: Lote[];
  [lote: string]: any;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ReporteResponse {
  success: boolean;
  data?: any[];
  pagination?: PaginationInfo;
  [key: string]: any;
}

const getProyectos = async (): Promise<ProyectosResponse> => {
  const response = await apiClient.get<ProyectosResponse>(
    API_ENDPOINTS.PROYECTOS
  );
  return response.data;
};

const getLotes = async (codProy?: string): Promise<LotesResponse> => {
  const response = await apiClient.get<LotesResponse>(API_ENDPOINTS.LOTES, {
    params: codProy ? { codProy } : undefined,
  });
  return response.data;
};

const getEstReclamos = async (
  codProy?: string,
  page: number = 1,
  limit: number = 50
): Promise<ReporteResponse> => {
  const response = await apiClient.get<ReporteResponse>(
    API_ENDPOINTS.EST_RECLAMOS,
    {
      params: {
        ...(codProy ? { codProy } : {}),
        page,
        limit,
      },
    }
  );
  return response.data;
};

const getDetalleReclamo = async (
  codProy?: string,
  page: number = 1,
  limit: number = 50
): Promise<ReporteResponse> => {
  const response = await apiClient.get<ReporteResponse>(
    API_ENDPOINTS.DETALLE_RECLAMO,
    {
      params: {
        ...(codProy ? { codProy } : {}),
        page,
        limit,
      },
    }
  );
  return response.data;
};

const getDetalleReclamoElim = async (
  codProy?: string,
  page: number = 1,
  limit: number = 50
): Promise<ReporteResponse> => {
  const response = await apiClient.get<ReporteResponse>(
    API_ENDPOINTS.DETALLE_RECLAMO_ELIM,
    {
      params: {
        ...(codProy ? { codProy } : {}),
        page,
        limit,
      },
    }
  );
  return response.data;
};

const getComisiones = async (
  codProy?: string,
  page: number = 1,
  limit: number = 50
): Promise<ReporteResponse> => {
  const response = await apiClient.get<ReporteResponse>(
    API_ENDPOINTS.COMISIONES,
    {
      params: {
        ...(codProy ? { codProy } : {}),
        page,
        limit,
      },
    }
  );
  return response.data;
};

const getLotesComision = async (
  codProy?: string,
  page: number = 1,
  limit: number = 50
): Promise<ReporteResponse> => {
  const response = await apiClient.get<ReporteResponse>(
    API_ENDPOINTS.LOTES_COMISION,
    {
      params: {
        ...(codProy ? { codProy } : {}),
        page,
        limit,
      },
    }
  );
  return response.data;
};

const getPeritosComision = async (
  codProy?: string,
  page: number = 1,
  limit: number = 50
): Promise<ReporteResponse> => {
  const response = await apiClient.get<ReporteResponse>(
    API_ENDPOINTS.PERITOS_COMISION,
    {
      params: {
        ...(codProy ? { codProy } : {}),
        page,
        limit,
      },
    }
  );
  return response.data;
};

const getTasadores = async (
  codProy?: string,
  page: number = 1,
  limit: number = 50
): Promise<ReporteResponse> => {
  const response = await apiClient.get<ReporteResponse>(
    API_ENDPOINTS.TASADORES,
    {
      params: {
        ...(codProy ? { codProy } : {}),
        page,
        limit,
      },
    }
  );
  return response.data;
};

const getPeritosBoletas = async (
  codProy?: string,
  page: number = 1,
  limit: number = 50
): Promise<ReporteResponse> => {
  const response = await apiClient.get<ReporteResponse>(
    API_ENDPOINTS.PERITOS_BOLETAS,
    {
      params: {
        ...(codProy ? { codProy } : {}),
        page,
        limit,
      },
    }
  );
  return response.data;
};

const getIngTasadores = async (
  codProy?: string,
  page: number = 1,
  limit: number = 50
): Promise<ReporteResponse> => {
  const response = await apiClient.get<ReporteResponse>(
    API_ENDPOINTS.ING_TASADORES,
    {
      params: {
        ...(codProy ? { codProy } : {}),
        page,
        limit,
      },
    }
  );
  return response.data;
};

const getDesgloseTas = async (
  codProy?: string,
  page: number = 1,
  limit: number = 50
): Promise<ReporteResponse> => {
  const response = await apiClient.get<ReporteResponse>(
    API_ENDPOINTS.DESGLOSE_TAS,
    {
      params: {
        ...(codProy ? { codProy } : {}),
        page,
        limit,
      },
    }
  );
  return response.data;
};

export {
  getProyectos,
  getLotes,
  getEstReclamos,
  getDetalleReclamo,
  getDetalleReclamoElim,
  getComisiones,
  getLotesComision,
  getPeritosComision,
  getTasadores,
  getPeritosBoletas,
  getIngTasadores,
  getDesgloseTas,
};

export const downloadComisionesExcel = async (codProy: string): Promise<Blob> => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.COMISIONES}/descargar`,
    {
      params: { codProy },
      responseType: 'blob',
    }
  );
  return response.data;
};

export const downloadDesgloseTasExcel = async (codProy: string): Promise<Blob> => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.DESGLOSE_TAS}/descargar`,
    {
      params: { codProy },
      responseType: 'blob',
    }
  );
  return response.data;
};

export const downloadDetalleReclamoExcel = async (codProy: string): Promise<Blob> => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.DETALLE_RECLAMO}/descargar`,
    {
      params: { codProy },
      responseType: 'blob',
    }
  );
  return response.data;
};

export const downloadDetalleReclamoElimExcel = async (codProy: string): Promise<Blob> => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.DETALLE_RECLAMO_ELIM}/descargar`,
    {
      params: { codProy },
      responseType: 'blob',
    }
  );
  return response.data;
};

export const downloadEstReclamosExcel = async (codProy: string): Promise<Blob> => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.EST_RECLAMOS}/descargar`,
    {
      params: { codProy },
      responseType: 'blob',
    }
  );
  return response.data;
};

export const downloadIngTasadoresExcel = async (codProy: string): Promise<Blob> => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.ING_TASADORES}/descargar`,
    {
      params: { codProy },
      responseType: 'blob',
    }
  );
  return response.data;
};

export const downloadLoteExcel = async (codProy: string): Promise<Blob> => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.LOTES}/descargar`,
    {
      params: { codProy },
      responseType: 'blob',
    }
  );
  return response.data;
};

export const downloadLotesComisionExcel = async (codProy: string): Promise<Blob> => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.LOTES_COMISION}/descargar`,
    {
      params: { codProy },
      responseType: 'blob',
    }
  );
  return response.data;
};

export const downloadPeritosBoletasExcel = async (codProy: string): Promise<Blob> => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.PERITOS_BOLETAS}/descargar`,
    {
      params: { codProy },
      responseType: 'blob',
    }
  );
  return response.data;
};

export const downloadPeritosComisionExcel = async (codProy: string): Promise<Blob> => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.PERITOS_COMISION}/descargar`,
    {
      params: { codProy },
      responseType: 'blob',
    }
  );
  return response.data;
};

export const downloadTasadoresExcel = async (codProy: string): Promise<Blob> => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.TASADORES}/descargar`,
    {
      params: { codProy },
      responseType: 'blob',
    }
  );
  return response.data;
};