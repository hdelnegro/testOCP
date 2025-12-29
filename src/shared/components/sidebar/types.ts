import type { LucideIcon } from "lucide-react";

export type FormType =
	| "crear-base"
	| "estudio-lotes"
	| "ingreso-ingenieria"
	| "ingreso-proyecto"
	| "plano-definitivo"
	| "plano-nuevo"
	| "ingreso-judicial"
	| "ingreso-juridica"
	| "lotes-en-tramites"
	| "reclamos"
	| "ingreso-convenio"
	| "calculo-reajuste"
	| "ingreso-receptores"
	| "ingreso-receptores-vc"
	| "ingreso-boletas"
	| "ingreso-boletas-concepto"
	| "ingreso-boletas-notarios-cbr"
	| "ingreso-monto"
	| "ingreso-datos-notarios"
	| "ingreso-datos-notarios-vc"
	| "ingreso-peritos-tasadores"
	| "ingreso-peritos-tasadores-vc"
	| "ingreso-peritos-judiciales"
	| "ingreso-peritos-judiciales-vc"
	| "ingreso-datos-publicaciones"
	| "ingreso-publicaciones-vc"
	| "lotes-en-otros-estados";

export interface SubItem {
	title: string;
	value?: FormType;
	icon?: LucideIcon;
	items?: SubItem[]; // Permite subitems anidados
}

export interface NavItem {
	title: string;
	value?: FormType;
	icon: LucideIcon;
	items?: SubItem[];
}

export interface NavFormulariosProps {
	items: NavItem[];
	onFormSelect: (formType: FormType) => void;
	selectedForm: FormType | null;
}
