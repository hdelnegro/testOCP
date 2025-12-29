// import { AbilityBuilder, createMongoAbility } from "@casl/ability";
// import type {
//   Permission,
//   Action,
//   Subject,
// } from "@/shared/types/permissions-types";

// // Re-exportar tipos para facilitar imports
// export type { Permission, Action, Subject } from "@/shared/types/permissions-types";

// // Tipo para las habilidades de CASL
// export type AppAbility = ReturnType<typeof createAppAbility>;

// /**
//  * Crea las habilidades de CASL basadas en los permisos del usuario
//  */
// export function createAppAbility(permissions: Permission[] = []) {
//   const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

//   // Convertir los permisos del backend a reglas de CASL
//   permissions.forEach((permission) => {
//     if (permission.canPerform) {
//       can(permission.action, permission.subject);
//     } else {
//       cannot(permission.action, permission.subject);
//     }
//   });

//   return build({
//     // Configuración para detectar qué campo usar para el tipo de sujeto
//     detectSubjectType: (item) => item.__type || item.constructor.name,
//   });
// }

// /**
//  * Hook para crear las habilidades por defecto (sin permisos)
//  */
// export function createDefaultAbility() {
//   const { build } = new AbilityBuilder(createMongoAbility);
//   return build();
// }

// /**
//  * Función helper para verificar permisos específicos
//  */
// export const checkPermission = (
//   ability: AppAbility,
//   action: Action,
//   subject: Subject
// ): boolean => {
//   return ability.can(action, subject);
// };

// /**
//  * Función helper para verificar múltiples permisos
//  */
// export const checkAnyPermission = (
//   ability: AppAbility,
//   permissions: Array<{ action: Action; subject: Subject }>
// ): boolean => {
//   return permissions.some(({ action, subject }) =>
//     ability.can(action, subject)
//   );
// };

// /**
//  * Función helper para verificar que tenga todos los permisos
//  */
// export const checkAllPermissions = (
//   ability: AppAbility,
//   permissions: Array<{ action: Action; subject: Subject }>
// ): boolean => {
//   return permissions.every(({ action, subject }) =>
//     ability.can(action, subject)
//   );
// };
