import { useQuery } from "react-query";
import { http } from "../config";
import {
  ApiJobsGetRequestParams,
  ApiJobsGetResponse,
  ApiJobsSearchGetRequestParams,
} from "../types";

type Jobs = {
  get: (query?: ApiJobsGetRequestParams) => Promise<ApiJobsGetResponse>;
  search: (
    query?: ApiJobsSearchGetRequestParams
  ) => Promise<ApiJobsGetResponse>;
};
const jobs: Jobs = {
  get: (query) =>
    http.get(
      `/jobs` +
        `?${query?.limit ? `limit=${query.limit}` : "12"}` +
        `${query?.cursor ? `&cursor=${query.cursor}` : ""}`
    ),
  search: (query) =>
    http.get(`/jobs/search` + `?${query?.name ? `query=${query.name}` : ""}`),
};
export const useJobs = (query?: ApiJobsGetRequestParams) =>
  useQuery({
    queryKey: [`jobs/get`, query?.cursor, query?.limit],
    queryFn: () => jobs.get(query),
  });
export const useJobsSearch = (query: ApiJobsSearchGetRequestParams) =>
  useQuery({
    queryKey: [`jobs/get`, query.name],
    queryFn: () => jobs.search(query),
    enabled: query.name.length > 2,
  });
