// import { cloneElement, isValidElement, type ReactNode } from "react";
// import { Can } from "@/shared/hooks/useAuth";
// import type { Action, Subject } from "@/shared/lib/api/permissions/abilities";
// import {
// 	Tooltip,
// 	TooltipContent,
// 	TooltipProvider,
// 	TooltipTrigger,
// } from "@/shared/components/ui/tooltip";

// interface PermissionGuardProps {
// 	action: Action;
// 	subject: Subject;
// 	children: ReactNode;
// 	fallback?: ReactNode;
// 	not?: boolean;
// 	disableInsteadOfHide?: boolean;
// 	disabledTooltip?: string;
// }

// /**
//  * Guard para proteger componentes basándose en permisos
//  *
//  * @param disableInsteadOfHide - Si es true, deshabilita el componente hijo en lugar de ocultarlo
//  * @param disabledTooltip - Tooltip a mostrar cuando el componente está deshabilitado
//  *
//  * @example Simple (ocultar si no tiene permiso)
//  * <PermissionGuard action="create" subject="proyectos">
//  *   <Button>Crear Proyecto</Button>
//  * </PermissionGuard>
//  *
//  * @example Deshabilitar en lugar de ocultar
//  * <PermissionGuard
//  *   action="create"
//  *   subject="usuarios"
//  *   disableInsteadOfHide={true}
//  *   disabledTooltip="No tienes permisos para crear usuarios"
//  * >
//  *   <Button>Crear Usuario</Button>
//  * </PermissionGuard>
//  */
// export function PermissionGuard({
// 	action,
// 	subject,
// 	children,
// 	fallback = null,
// 	not = false,
// 	disableInsteadOfHide = false,
// 	disabledTooltip,
// }: PermissionGuardProps) {
// 	// Caso 1: Modo "disable" - deshabilitar componente hijo
// 	if (disableInsteadOfHide) {
// 		return (
// 			<Can I={action} a={subject} not={not}>
// 				{(allowed: boolean) => {
// 					// Si tiene permiso, renderizar normalmente
// 					if (allowed) {
// 						return <>{children}</>;
// 					}

// 					// Si NO tiene permiso, renderizar deshabilitado con tooltip
// 					const disabledChild = isValidElement(children)
// 						? cloneElement(children as React.ReactElement<Record<string, unknown>>, {
// 								disabled: true,
// 								"aria-disabled": true,
// 							})
// 						: children;

// 					// Con tooltip si se proporciona
// 					if (disabledTooltip) {
// 						return (
// 							<TooltipProvider>
// 								<Tooltip>
// 									<TooltipTrigger asChild>{disabledChild}</TooltipTrigger>
// 									<TooltipContent>
// 										<p>{disabledTooltip}</p>
// 									</TooltipContent>
// 								</Tooltip>
// 							</TooltipProvider>
// 						);
// 					}

// 					// Sin tooltip
// 					return disabledChild;
// 				}}
// 			</Can>
// 		);
// 	}

// 	// Caso 2: Modo normal (legacy) - ocultar/mostrar
// 	if (not) {
// 		return (
// 			<Can not I={action} a={subject}>
// 				{(allowed: boolean) => (allowed ? children : fallback)}
// 			</Can>
// 		);
// 	}

// 	return (
// 		<Can I={action} a={subject}>
// 			{(allowed: boolean) => (allowed ? children : fallback)}
// 		</Can>
// 	);
// }
