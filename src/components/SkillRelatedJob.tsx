import { useJobById } from "../api";
import { Loader } from "./Loader";
type SkillRelatedJob = {
  skillJobId: string;
};
export const SkillRelatedJob = ({ skillJobId }: SkillRelatedJob) => {
  const { data: jobByIdResponse, isLoading: isLoadingJob } =
    useJobById(skillJobId);
  const jobData = jobByIdResponse?.data.job;

  return (
    <section className="skill-related-job-card">
      {isLoadingJob ? <Loader /> : <h2>{jobData?.attributes.title}</h2>}
    </section>
  );
};
