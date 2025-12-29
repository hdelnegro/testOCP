// export const APP_CONFIG = {
//   name: "Sistema",
//   shortName: "Sistema",
//   description: "Sistema",
//   version: "1.0.0",
// } as const;

export const API_ENDPOINTS = {
  //Auth
  LOGIN: "/auth/login",
  USER_PROFILE: "/auth/profile",
  LOGOUT: "/auth/logout",

  //Permissions
  USER_PERMISSIONS: "/permissions",

  //Forms

  //Users
  USERS: "/usuario",

  //Roles
  ROLES: "/roles",

  //Reportes
  PROYECTOS: "/proyectos",
  LOTES: "/lote",
  EST_RECLAMOS: "/est-reclamos",
  DETALLE_RECLAMO: "/detalle-reclamo",
  DETALLE_RECLAMO_ELIM: "/detalle-reclamo-elim",
  COMISIONES: "/comisiones",
  LOTES_COMISION: "/lotes-comision",
  PERITOS_COMISION: "/peritos-comision",
  TASADORES: "/tasadores",
  PERITOS_BOLETAS: "/peritos-boletas",
  ING_TASADORES: "/ing-tasadores",
  DESGLOSE_TAS: "/desglose-tas",

  //Auditoria
  AUDITORIA: "/auditoria",
};

export const PAGINATION_DEFAULTS = {
  page: 1,
  limit: 10,
  maxLimit: 100,
} as const;

export const DATE_FORMATS = {
  display: "DD/MM/YYYY",
  displayWithTime: "DD/MM/YYYY HH:mm",
  api: "YYYY-MM-DD",
  apiWithTime: "YYYY-MM-DDTHH:mm:ss.SSSZ",
} as const;

export const VALIDATION_RULES = {
  minPasswordLength: 8,
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedFileTypes: ["image/jpeg", "image/png", "application/pdf"],
  maxTextLength: 500,
  maxDescriptionLength: 2000,
} as const;

export const UI_CONSTANTS = {
  debounceDelay: 300,
  animationDuration: 200,
  toastDuration: 5000,
  modalZIndex: 1000,
} as const;
