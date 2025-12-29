import { Loader2 } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

import { useGetRoles } from "../../roles/hooks/useGetRoles";
import { useUpdateUser } from "../hooks/useUpdateUser";
import type { User, UpdateUserRequest } from "../types/user.type";
import { Button } from "@/shared/components/ui/button";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/components/ui/select";

interface EditUserDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	user: User | null;
}

export function EditUserDialog({
	open,
	onOpenChange,
	user,
}: EditUserDialogProps) {
	const [formData, setFormData] = useState({
		nombre_completo: "",
		correo_electronico: "",
		rol_id: "",
		activo: true,
	});

	// Hooks para API
	const { data: rolesResponse, isLoading: rolesLoading } = useGetRoles({
		limit: 50,
	});
	const updateUserMutation = useUpdateUser();

	const roles = rolesResponse?.data || [];

	useEffect(() => {
		if (user) {
			setFormData({
				nombre_completo: user.nombre_completo || "",
				correo_electronico: user.correo_electronico || "",
				rol_id: user.rol_id?.toString() || "",
				activo: user.activo ?? true,
			});
		}
	}, [user]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (
			!user ||
			!formData.nombre_completo ||
			!formData.correo_electronico ||
			!formData.rol_id
		) {
			return;
		}

		const updateData: UpdateUserRequest = {
			nombre_completo: formData.nombre_completo,
			correo_electronico: formData.correo_electronico,
			rol_id: Number.parseInt(formData.rol_id, 10),
			activo: formData.activo,
		};

		console.log("Datos a enviar:", updateData);
		console.log("ID del usuario:", user.id);

		try {
			await updateUserMutation.updateUser({
				id: user.id,
				userData: updateData,
			});
			onOpenChange(false);
		} catch (error) {
			console.error("Error completo al actualizar usuario:", error);
		}
	};

	if (!user) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="!max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Editar usuario</DialogTitle>
					<DialogDescription>
						Modifica la información del usuario seleccionado.
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="space-y-4">
						<h3 className="text-lg font-medium">Información personal</h3>
						<div className="space-y-2">
							<Label htmlFor="edit-nombre_completo">Nombre completo *</Label>
							<Input
								id="edit-nombre_completo"
								value={formData.nombre_completo}
								onChange={(e) =>
									setFormData((prev) => ({
										...prev,
										nombre_completo: e.target.value,
									}))
								}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="edit-correo_electronico">
								Correo electrónico *
							</Label>
							<Input
								id="edit-correo_electronico"
								type="email"
								value={formData.correo_electronico}
								onChange={(e) =>
									setFormData((prev) => ({
										...prev,
										correo_electronico: e.target.value,
									}))
								}
								required
							/>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-lg font-medium">Rol y estado</h3>
						<div className="space-y-2">
							<Label htmlFor="edit-rol_id">Rol *</Label>
							{rolesLoading ? (
								<div className="flex items-center justify-center p-2">
									<Loader2 className="h-4 w-4 animate-spin" />
									<span className="ml-2 text-sm">Cargando roles...</span>
								</div>
							) : (
								<Select
									value={formData.rol_id}
									onValueChange={(value) =>
										setFormData((prev) => ({ ...prev, rol_id: value }))
									}
								>
									<SelectTrigger>
										<SelectValue placeholder="Selecciona un rol">
											{formData.rol_id &&
												roles.find(
													(role) => role.id.toString() === formData.rol_id,
												)?.nombre}
										</SelectValue>
									</SelectTrigger>
									<SelectContent className="max-h-[300px] overflow-y-auto">
										{roles.map((role) => (
											<SelectItem
												key={role.id}
												value={role.id.toString()}
												className="py-3"
											>
												<div className="flex flex-col gap-1">
													<span className="font-medium">{role.nombre}</span>
													<span className="text-xs text-muted-foreground leading-tight">
														{role.descripcion}
													</span>
												</div>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="edit-activo">Estado *</Label>
							<Select
								value={formData.activo ? "true" : "false"}
								onValueChange={(value) =>
									setFormData((prev) => ({
										...prev,
										activo: value === "true",
									}))
								}
							>
								<SelectTrigger>
									<SelectValue placeholder="Selecciona un estado" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="true">Activo</SelectItem>
									<SelectItem value="false">Inactivo</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					<DialogFooter>
						<Button
							type="button"
							variant="secundario"
							onClick={() => onOpenChange(false)}
							disabled={updateUserMutation.isLoading}
						>
							Cancelar
						</Button>
						<Button type="submit" disabled={updateUserMutation.isLoading}>
							{updateUserMutation.isLoading ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Guardando...
								</>
							) : (
								"Guardar Cambios"
							)}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
