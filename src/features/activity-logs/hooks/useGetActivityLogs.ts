import { useQuery } from "@tanstack/react-query";
import { getActivityLogs } from "../services/activity-logs.service";
import type { GetActivityLogsParams } from "../types/activity-logs.type";

export const useGetActivityLogs = (params?: GetActivityLogsParams) => {
  return useQuery({
    queryKey: ["activity-logs", params],
    queryFn: () => getActivityLogs(params),
  });
};
