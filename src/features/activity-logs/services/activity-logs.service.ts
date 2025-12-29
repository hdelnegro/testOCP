import { API_ENDPOINTS } from "@/shared/lib/constants/api";
import { apiClient } from "@/shared/lib/api";
import type {
  GetActivityLogsParams,
  GetActivityLogsResponse,
  GetActivityLogByIdResponse,
} from "../types/activity-logs.type";

const getActivityLogs = async (
  params?: GetActivityLogsParams
): Promise<GetActivityLogsResponse> => {
  const response = await apiClient.get<GetActivityLogsResponse>(
    API_ENDPOINTS.AUDITORIA,
    {
      params,
    }
  );
  return response.data;
};

const getActivityLogById = async (
  id: number
): Promise<GetActivityLogByIdResponse> => {
  const response = await apiClient.get<GetActivityLogByIdResponse>(
    `${API_ENDPOINTS.AUDITORIA}/${id}`
  );
  return response.data;
};

export { getActivityLogs, getActivityLogById };
