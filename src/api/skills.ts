import { useQuery } from "react-query";
import { http } from "../config";
import {
  ApiSkillByIdGetResponse,
  ApiSkillsGetRequestParams,
  ApiSkillsGetResponse,
} from "../types";

type Skills = {
  get: (query: ApiSkillsGetRequestParams) => Promise<ApiSkillsGetResponse>;
  getById: (id: string) => Promise<ApiSkillByIdGetResponse>;
};
const skills: Skills = {
  get: (query) => http.get(`/skill/${query.id}`),
  getById: (id) => http.get(`/skill/${id}`),
};
export const useSkills = (query: ApiSkillsGetRequestParams) =>
  useQuery({
    queryKey: [`skills/get`, query],
    queryFn: () => skills.get(query),
    enabled: !!query.id,
  });
export const useSkillById = (id: string) =>
  useQuery({
    queryKey: [`skills/getById`, id],
    queryFn: () => skills.getById(id),
    enabled: !!id,
  });
