import { useInfiniteQuery, useQuery } from "react-query";
import { http } from "../config";
import {
  ApiJobByIdGetResponse,
  ApiJobsGetRequestParams,
  ApiJobsGetResponse,
  ApiJobsSearchGetRequestParams,
} from "../types";

type Jobs = {
  get: (query?: ApiJobsGetRequestParams) => Promise<ApiJobsGetResponse>;
  search: (query: ApiJobsSearchGetRequestParams) => Promise<ApiJobsGetResponse>;
  getById: (id: string) => Promise<ApiJobByIdGetResponse>;
};
const jobs: Jobs = {
  get: (query) =>
    http.get(
      `/jobs?` +
        `${query?.limit ? `limit=${query.limit}&` : ""}` +
        `${query?.cursor ? `cursor=${query.cursor}` : ""}`
    ),
  search: (query) =>
    http.get(`/jobs/search` + `?${query?.name ? `query=${query.name}` : ""}`),
  getById: (id) => http.get(`/job/${id}`),
};
export const useJobs = (query?: ApiJobsGetRequestParams) =>
  useInfiniteQuery({
    queryKey: [`jobs/get`, query?.cursor, query?.limit],
    queryFn: ({ pageParam }) =>
      jobs.get({ cursor: pageParam, limit: query?.limit }),
    getNextPageParam: (lastPage: ApiJobsGetResponse, allPages) => {
      return allPages.length < lastPage.data.meta.count
        ? allPages.length
        : undefined;
    },
  });
export const useJobsSearch = (query: ApiJobsSearchGetRequestParams) =>
  useQuery({
    queryKey: [`jobs/get`, query.name],
    queryFn: () => jobs.search(query),
    enabled:
      query.name.length === 0 || (!!query.name.length && query.name.length > 2),
  });
export const useJobById = (id: string) =>
  useQuery({
    queryKey: [`jobs/getById`, id],
    queryFn: () => jobs.getById(id),
    enabled: !!id,
  });
