export type ApiSkillsGetRequestParams = {
  id: string;
};
export type ApiSkillsGetResponse = {
  data: {
    skill: {
      id: string;
      type: "skill";
      attributes: {
        name: string;
        type: string;
        importance: string;
        level: string;
      };
      relationships: {
        jobs: {
          id: string;
        }[];
        skills: {
          id: string;
        }[];
      };
    };
  };
};
