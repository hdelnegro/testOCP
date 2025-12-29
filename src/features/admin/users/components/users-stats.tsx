import { Shield, Users } from "lucide-react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import type { User } from "../types/user.type";

interface UsersStatsProps {
	users: User[];
	totalUsers: number;
}

export function UsersStats({ users, totalUsers }: UsersStatsProps) {
	const activeUsers = users.filter((user) => user.activo).length;
	const adminUsers = users.filter(
		(user) => user.rol?.nombre === "Administrador",
	).length;

	return (
		<div className="grid gap-4 md:grid-cols-4">
			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">Total Usuarios</CardTitle>
					<Users className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">{totalUsers}</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">
						Usuarios Activos
					</CardTitle>
					<Shield className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">{activeUsers}</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">
						Administradores
					</CardTitle>
					<Shield className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">{adminUsers}</div>
				</CardContent>
			</Card>
		</div>
	);
}
