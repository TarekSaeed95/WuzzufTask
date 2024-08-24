import { useJobById } from "../api";
type SkillRelatedJob = {
  skillJobId: string;
};
export const SkillRelatedJob = ({ skillJobId }: SkillRelatedJob) => {
  const { data: jobByIdResponse } = useJobById(skillJobId);
  const jobData = jobByIdResponse?.data.job;

  return (
    <section className="skill-related-job-card">
      <h2>{jobData?.attributes.title}</h2>
    </section>
  );
};
