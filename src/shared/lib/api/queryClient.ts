import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000,
			gcTime: 10 * 60 * 1000,
			retry: (failureCount, error: any) => {
				// No reintentar en errores 4xx (excepto 408, 429)
				if (error?.response?.status >= 400 && error?.response?.status < 500) {
					if (
						error?.response?.status === 408 ||
						error?.response?.status === 429
					) {
						return failureCount < 3;
					}
					return false;
				}
				return failureCount < 3;
			},
			refetchOnWindowFocus: false,
			refetchOnReconnect: true,
		},
		mutations: {
			retry: (failureCount, error: any) => {
				// No reintentar mutaciones en errores 4xx
				if (error?.response?.status >= 400 && error?.response?.status < 500) {
					return false;
				}
				return failureCount < 2;
			},
		},
	},
});
