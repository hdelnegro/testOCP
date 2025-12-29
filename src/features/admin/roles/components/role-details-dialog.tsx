import type React from "react";
import { useEffect, useState } from "react";
import { Loader2, Pencil, X, Check } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Separator } from "@/shared/components/ui/separator";
import { Textarea } from "@/shared/components/ui/textarea";
import type { Role } from "../types/roles.type";
import { useGetRoleFormularios } from "../hooks/useGetRoleFormularios";
import { useUpdateRole } from "../hooks/useUpdateRole";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/shared/components/ui/table";

interface RoleDetailsDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	role: Role | null;
	onSuccess?: () => void;
}

export function RoleDetailsDialog({
	open,
	onOpenChange,
	role,
	onSuccess,
}: RoleDetailsDialogProps) {
	const [formData, setFormData] = useState({
		nombre: "",
		descripcion: "",
	});
	const [editingField, setEditingField] = useState<string | null>(null);
	const [tempValues, setTempValues] = useState({
		nombre: "",
		descripcion: "",
	});

	const {
		data: formulariosResponse,
		isLoading: formulariosLoading,
		error: formulariosError,
	} = useGetRoleFormularios(role?.id || 0, { page: 1, limit: 100 }, !!role);

	const { updateRole: updateRoleMutation, isLoading: updateLoading } =
		useUpdateRole();

	useEffect(() => {
		if (role) {
			const newData = {
				nombre: role.nombre || "",
				descripcion: role.descripcion || "",
			};
			setFormData(newData);
			setTempValues(newData);
		}
	}, [role]);

	const handleEditClick = (fieldName: string) => {
		setEditingField(fieldName);
		setTempValues((prev) => ({
			...prev,
			[fieldName]: formData[fieldName as keyof typeof formData],
		}));
	};

	const handleCancelEdit = () => {
		setEditingField(null);
		setTempValues({
			nombre: formData.nombre,
			descripcion: formData.descripcion,
		});
	};

	const handleConfirmEdit = () => {
		if (editingField) {
			setFormData((prev) => ({
				...prev,
				[editingField]: tempValues[editingField as keyof typeof tempValues],
			}));
		}
		setEditingField(null);
	};

	const handleTempValueChange = (fieldName: string, value: string) => {
		setTempValues((prev) => ({
			...prev,
			[fieldName]: value,
		}));
	};

	const getRoleChanges = () => {
		const changes: Partial<{ nombre: string; descripcion: string }> = {};

		if (formData.nombre !== (role?.nombre || "")) {
			changes.nombre = formData.nombre;
		}

		if (formData.descripcion !== (role?.descripcion || "")) {
			changes.descripcion = formData.descripcion;
		}

		return Object.keys(changes).length > 0 ? changes : null;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!role) return;

		try {
			const roleChanges = getRoleChanges();

			if (roleChanges) {
				await updateRoleMutation({
					id: role.id,
					roleData: roleChanges,
				});
				onSuccess?.();
				onOpenChange(false);
			} else {
				onOpenChange(false);
			}
		} catch (error) {
			// El error se maneja en el hook
			console.error("Error updating role:", error);
		}
	};

	if (!role) return null;

	const formularios = formulariosResponse?.data || [];

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Detalles del Rol</DialogTitle>
					<DialogDescription>
						Visualiza y edita la información del rol y sus formularios asignados.
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="space-y-4">
						<h3 className="text-lg font-medium">Información del rol</h3>
						<div className="grid grid-cols-1 gap-4">
							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<Label htmlFor="role-nombre">Nombre del rol</Label>
									{editingField === "nombre" ? (
										<div className="flex items-center gap-1">
											<Button type="button" variant="ghost" size="sm" className="p-0 text-red-500 hover:text-red-600" onClick={handleCancelEdit}>
												<X className="h-3 w-3" />
											</Button>
											<Button type="button" variant="ghost" size="sm" className="p-0 text-green-500 hover:text-green-600" onClick={handleConfirmEdit}>
												<Check className="h-3 w-3" />
											</Button>
										</div>
									) : (
										<Button type="button" variant="ghost" size="sm" className="p-0" onClick={() => handleEditClick("nombre")}>
											<Pencil className="h-3 w-3" />
										</Button>
									)}
								</div>
								<Input id="role-nombre" value={editingField === "nombre" ? tempValues.nombre : formData.nombre} onChange={(e) => handleTempValueChange("nombre", e.target.value)} disabled={editingField !== "nombre"} required className={editingField === "nombre" ? "ring-2 ring-blue-500" : ""} />
							</div>
							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<Label htmlFor="role-descripcion">Descripción</Label>
									{editingField === "descripcion" ? (
										<div className="flex items-center gap-1">
											<Button type="button" variant="ghost" size="sm" className="p-0 text-red-500 hover:text-red-600" onClick={handleCancelEdit}>
												<X className="h-3 w-3" />
											</Button>
											<Button type="button" variant="ghost" size="sm" className="p-0 text-green-500 hover:text-green-600" onClick={handleConfirmEdit}>
												<Check className="h-3 w-3" />
											</Button>
										</div>
									) : (
										<Button type="button" variant="ghost" size="sm" className="p-0" onClick={() => handleEditClick("descripcion")}>
											<Pencil className="h-3 w-3" />
										</Button>
									)}
								</div>
								<Textarea id="role-descripcion" value={editingField === "descripcion" ? tempValues.descripcion : formData.descripcion} onChange={(e) => handleTempValueChange("descripcion", e.target.value)} disabled={editingField !== "descripcion"} placeholder="Describe las responsabilidades de este rol..." rows={2} className={editingField === "descripcion" ? "ring-2 ring-blue-500" : ""} />
							</div>
						</div>
					</div>

					<Separator />

					<div className="space-y-4">
						<h3 className="text-lg font-medium">Formularios asignados</h3>
						{formulariosLoading ? (
							<div className="flex items-center justify-center py-8">
								<Loader2 className="h-8 w-8 animate-spin" />
								<span className="ml-2">Cargando formularios...</span>
							</div>
						) : formulariosError ? (
							<div className="text-center py-8 text-red-500">
								Error al cargar los formularios. Por favor, intenta de nuevo.
							</div>
						) : formularios.length > 0 ? (
							<Card>
								<CardHeader>
									<CardTitle className="text-base">Lista de formularios</CardTitle>
									<CardDescription>Formularios que este rol puede acceder</CardDescription>
								</CardHeader>
								<CardContent>
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead className="w-[30%]">Título</TableHead>
												<TableHead className="w-[70%]">Descripción</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{formularios.map((formulario) => (
												<TableRow key={formulario.id}>
													<TableCell className="font-medium">{formulario.titulo}</TableCell>
													<TableCell className="text-sm text-muted-foreground break-words whitespace-normal">{formulario.descripcion}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</CardContent>
							</Card>
						) : (
							<div className="text-center py-8 text-muted-foreground">
								No se encontraron formularios asignados a este rol.
							</div>
						)}
					</div>

					<DialogFooter>
						<Button type="button" variant="secundario" onClick={() => onOpenChange(false)}>
							Cancelar
						</Button>
						<Button type="submit" disabled={updateLoading}>
							{updateLoading ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Guardando...
								</>
							) : (
								"Guardar cambios"
							)}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
