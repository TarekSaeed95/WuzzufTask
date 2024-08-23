import { useQuery } from "react-query";
import { http } from "../config";
import { ApiJobsGetRequestParams, ApiJobsGetResponse } from "../types";

type Jobs = {
  get: (query?: ApiJobsGetRequestParams) => Promise<ApiJobsGetResponse>;
};
const jobs: Jobs = {
  get: (query) =>
    http.get(
      `/jobs` +
        `?${query?.limit ? `limit=${query.limit}` : "12"}` +
        `${query?.cursor ? `&cursor=${query.cursor}` : ""}`
    ),
};
export const useJobs = (query?: ApiJobsGetRequestParams) =>
  useQuery({
    queryKey: [`jobs/get`, query],
    queryFn: () => jobs.get(query),
  });
