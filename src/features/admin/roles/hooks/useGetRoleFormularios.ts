import { useQuery } from "@tanstack/react-query";
import type { GetRoleFormulariosParams } from "../types/roles.type";
import { getRoleFormularios } from "../services/roles.service";

export const useGetRoleFormularios = (
	roleId: number,
	params?: GetRoleFormulariosParams,
	enabled = true,
) => {
	return useQuery({
		queryKey: ["roleFormularios", roleId, params],
		queryFn: () => getRoleFormularios(roleId, params),
		enabled: enabled && !!roleId,
		staleTime: 5 * 60 * 1000,
		retry: 1,
	});
};
