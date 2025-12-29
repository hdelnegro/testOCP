import { useQuery } from "@tanstack/react-query";
import { getActivityLogById } from "../services/activity-logs.service";

export const useGetActivityLogById = (id: number) => {
  return useQuery({
    queryKey: ["activity-log", id],
    queryFn: () => getActivityLogById(id),
    enabled: !!id,
  });
};
