export type ApiJobsGetRequestParams = { cursor?: number; limit?: number };
export type ApiJobsSearchGetRequestParams = { name: string };
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

export type ApiJobByIdGetResponse = {
  data: {
    job: {
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
  };
};
