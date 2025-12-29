import axios, {
	type InternalAxiosRequestConfig,
	type AxiosResponse,
	type AxiosError,
} from "axios";

// Configuración base de la API
export const API_BASE_URL =
	import.meta.env.VITE_API_URL ||
	"https://expropiaciones-be-expropiaciones.apps.ocppro.mop.gob.cl/";

console.log("import.meta.env.VITE_API_URL", import.meta.env.VITE_API_URL);

// Instancia base de axios
export const apiClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

// Interceptor para agregar token de autenticación
apiClient.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const token = localStorage.getItem("authToken");
		if (token && config.headers) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	},
);

// Interceptor para manejar errores de respuesta
apiClient.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error: AxiosError) => {
		// Manejar errores comunes (401, 403, 500, etc.)
		// if (error.response?.status === 401) {
		//   // Redirigir a login o refrescar token
		//   localStorage.removeItem("authToken");
		//   window.location.href = "/auth/login";
		// }
		return Promise.reject(error);
	},
);

// Tipos comunes para respuestas de API
export interface ApiResponse<T> {
	data: T;
	message?: string;
	success: boolean;
}

export interface PaginatedResponse<T> {
	data: T[];
	total: number;
	page: number;
	limit: number;
	totalPages: number;
}
