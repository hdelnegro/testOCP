// import {
// 	createContext,
// 	useContext,
// 	useMemo,
// 	type ReactNode,
// } from "react";
// import { createContextualCan } from "@casl/react";
// import {
// 	createAppAbility,
// 	createDefaultAbility,
// 	type AppAbility,
// } from "@/shared/lib/api/permissions/abilities";
// import { useUserProfile } from "@/features/auth/hooks/useUserProfile";
// import { useGetUserPermissions } from "@/features/auth/permissions/hooks/useGetPermissions";
// import type { UserProfile } from "@/features/admin/users/types/user.type";
// import type { PermissionsResponse } from "@/features/auth/types/permissions.type";

// /**
//  * Tipo del contexto de autenticación
//  * Incluye autenticación Y permisos en un solo lugar
//  */
// interface AuthContextType {
// 	// ========== Autenticación ==========
// 	user: UserProfile | null;
// 	isAuthenticated: boolean;

// 	// ========== Permisos ==========
// 	permissions: PermissionsResponse | null;
// 	ability: AppAbility;

// 	// ========== Estados de carga ==========
// 	isLoading: boolean; // Cargando datos (user o permissions)

// 	// ========== Helpers ==========
// 	can: (formularioId: number) => boolean;
// 	canAccessForm: (formularioId: number, tipoAcceso?: string) => boolean;
// }

// // Contexto principal de Auth
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // Contexto de CASL (para usar <Can> component)
// const AbilityContext = createContext<AppAbility>(createDefaultAbility());

// /**
//  * Hook para acceder al contexto de autenticación
//  */
// export const useAuth = () => {
// 	const context = useContext(AuthContext);
// 	if (context === undefined) {
// 		throw new Error("useAuth debe ser usado dentro de un AuthProvider");
// 	}
// 	return context;
// };

// /**
//  * Hook para acceder directamente al ability de CASL
//  */
// export const useAbility = () => {
// 	return useContext(AbilityContext);
// };

// /**
//  * Componente <Can> de CASL para renderizado condicional
//  *
//  * @example
//  * <Can I="create" a="proyectos">
//  *   <Button>Crear Proyecto</Button>
//  * </Can>
//  */
// export const Can = createContextualCan(AbilityContext.Consumer);

// interface AuthProviderProps {
// 	children: ReactNode;
// }

// /**
//  * Provider unificado de Autenticación y Permisos
//  *
//  * Maneja:
//  * - Datos de usuario (desde React Query cache)
//  * - Permisos del usuario (desde React Query cache)
//  * - Construcción de abilities de CASL
//  * - Estado de carga
//  *
//  * IMPORTANTE: Este provider NO hace fetch directo.
//  * Lee los datos que ya fueron pre-cargados por useLogin en el cache de React Query.
//  */
// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
// 	// ========== Leer datos del cache de React Query ==========
// 	const { user, isLoading: loadingUser } = useUserProfile();
// 	const { permissions, isLoading: loadingPermissions } =
// 		useGetUserPermissions();

// 	// ========== Construir abilities de CASL ==========
// 	const ability = useMemo(() => {
// 		if (!permissions?.data?.formularios) {
// 			return createDefaultAbility();
// 		}

// 		// Convertir permisos de formularios a formato CASL
// 		const formPermissions = permissions.data.formularios.map((form) => ({
// 			action: form.tipo_acceso,
// 			subject: `formulario_${form.formulario_id}`,
// 			canPerform: form.activo,
// 		}));

// 		return createAppAbility(formPermissions);
// 	}, [permissions]);

// 	// ========== Helper functions ==========

// 	/**
// 	 * Verifica si el usuario puede acceder a un formulario específico
// 	 */
// 	const can = useMemo(
// 		() => (formularioId: number): boolean => {
// 			if (!permissions?.data?.formularios) return false;

// 			return permissions.data.formularios.some(
// 				(form) => form.formulario_id === formularioId && form.activo,
// 			);
// 		},
// 		[permissions],
// 	);

// 	/**
// 	 * Verifica si el usuario puede acceder a un formulario con un tipo de acceso específico
// 	 */
// 	const canAccessForm = useMemo(
// 		() =>
// 			(formularioId: number, tipoAcceso?: string): boolean => {
// 				if (!permissions?.data?.formularios) return false;

// 				return permissions.data.formularios.some(
// 					(form) =>
// 						form.formulario_id === formularioId &&
// 						form.activo &&
// 						(!tipoAcceso || form.tipo_acceso === tipoAcceso),
// 				);
// 			},
// 		[permissions],
// 	);

// 	// ========== Valor del contexto ==========
// 	const value: AuthContextType = useMemo(
// 		() => ({
// 			// Auth
// 			user,
// 			isAuthenticated: !!user,

// 			// Permisos
// 			permissions: permissions ?? null,
// 			ability,

// 			// Estados
// 			isLoading: loadingUser || loadingPermissions,

// 			// Helpers
// 			can,
// 			canAccessForm,
// 		}),
// 		[
// 			user,
// 			permissions,
// 			ability,
// 			loadingUser,
// 			loadingPermissions,
// 			can,
// 			canAccessForm,
// 		],
// 	);

// 	return (
// 		<AuthContext.Provider value={value}>
// 			<AbilityContext.Provider value={ability}>
// 				{children}
// 			</AbilityContext.Provider>
// 		</AuthContext.Provider>
// 	);
// };
