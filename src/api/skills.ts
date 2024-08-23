import { useQuery } from "react-query";
import { http } from "../config";
import { ApiSkillsGetRequestParams, ApiSkillsGetResponse } from "../types";

type Skills = {
  get: (query: ApiSkillsGetRequestParams) => Promise<ApiSkillsGetResponse>;
};
const skills: Skills = {
  get: (query) => http.get(`/skill/${query.id}`),
};
export const useSkills = (query: ApiSkillsGetRequestParams) =>
  useQuery({
    queryKey: [`skills/get`, query],
    queryFn: () => skills.get(query),
    enabled: !!query.id,
  });
