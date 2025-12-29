import { Loader2 } from "lucide-react";
import type React from "react";
import { useState } from "react";

import { useGetRoles } from "../../roles/hooks/useGetRoles";
import { useCreateUser } from "../hooks/useCreateUser";
import type { CreateUserRequest } from "../types/user.type";
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
import { Button } from "@/shared/components/ui/button";

interface CreateUserDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function CreateUserDialog({
	open,
	onOpenChange,
}: CreateUserDialogProps) {
	const [formData, setFormData] = useState({
		nombre_completo: "",
		correo_electronico: "",
		password: "",
		rol_id: "",
	});

	// Hooks para API
	const { data: rolesResponse, isLoading: rolesLoading } = useGetRoles({
		limit: 50,
	});
	const createUserMutation = useCreateUser();

	const roles = rolesResponse?.data || [];

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (
			!formData.nombre_completo ||
			!formData.correo_electronico ||
			!formData.password ||
			!formData.rol_id
		) {
			return;
		}

		const userData: CreateUserRequest = {
			nombre_completo: formData.nombre_completo,
			correo_electronico: formData.correo_electronico,
			password: formData.password,
			rol_id: Number.parseInt(formData.rol_id, 10),
		};

		try {
			await createUserMutation.createUser(userData);
			onOpenChange(false);
			setFormData({
				nombre_completo: "",
				correo_electronico: "",
				password: "",
				rol_id: "",
			});
		} catch (error) {
			console.error("Error creating user:", error);
		}
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="!max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Crear usuario</DialogTitle>
					<DialogDescription>
						Completa la información para crear un nuevo usuario en el sistema.
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="space-y-4">
						<h3 className="text-lg font-medium">Información personal</h3>
						<div className="space-y-2">
							<Label htmlFor="nombre_completo">Nombre completo *</Label>
							<Input
								id="nombre_completo"
								value={formData.nombre_completo}
								onChange={(e) =>
									setFormData((prev) => ({
										...prev,
										nombre_completo: e.target.value,
									}))
								}
								placeholder="Ej: Juan Pérez García"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="correo_electronico">Correo electrónico *</Label>
							<Input
								id="correo_electronico"
								type="email"
								value={formData.correo_electronico}
								onChange={(e) =>
									setFormData((prev) => ({
										...prev,
										correo_electronico: e.target.value,
									}))
								}
								placeholder="usuario@empresa.com"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Contraseña *</Label>
							<Input
								id="password"
								type="password"
								value={formData.password}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, password: e.target.value }))
								}
								placeholder="Contraseña temporal"
								required
							/>
							<p className="text-xs text-muted-foreground">
								El usuario podrá cambiar esta contraseña en su primer acceso
							</p>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-lg font-medium">Rol del usuario</h3>
						<div className="space-y-2">
							<Label htmlFor="rol_id">Rol *</Label>
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
					</div>

					<DialogFooter>
						<Button
							type="button"
							variant="secundario"
							onClick={() => onOpenChange(false)}
							disabled={createUserMutation.isLoading}
						>
							Cancelar
						</Button>
						<Button
							type="submit"
							disabled={
								createUserMutation.isLoading ||
								!formData.nombre_completo ||
								!formData.correo_electronico ||
								!formData.password ||
								!formData.rol_id
							}
						>
							{createUserMutation.isLoading ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Creando...
								</>
							) : (
								"Crear usuario"
							)}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
