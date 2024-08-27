import { Link } from "react-router-dom";
import { useJobById } from "../../api";
type SkillRelatedJob = {
  skillJobId: string;
};
export const SkillRelatedJob = ({ skillJobId }: SkillRelatedJob) => {
  const { data: jobByIdResponse } = useJobById(skillJobId);
  const jobData = jobByIdResponse?.data.job;

  return (
    <section className="skill-related-job-card">
      <h2>
        <Link to={`/job/${skillJobId}`}>{jobData?.attributes.title}</Link>
      </h2>
    </section>
  );
};
