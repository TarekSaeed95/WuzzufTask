export type ApiJobsGetRequestParams = { cursor?: number; limit?: number };
export type Job = {
  id: string;
  type: string;
  attributes: {
    title: string;
  };
  relationships: {
    skills: {
      id: string;
    }[];
  };
};
export type ApiJobsGetResponse = {
  data: {
    jobs: Job[];
    meta: {
      next: number;
      count: number;
    };
  };
};
