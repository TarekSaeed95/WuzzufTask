import { Link } from "react-router-dom";
import { Job } from "../types";
import { JobsCardSkills } from "./JobsCardSkills";
type JobCardComponentProps = {
  job: Job;
};
export const JobCardComponent = ({ job }: JobCardComponentProps) => {
  const skillsElement = job.relationships.skills.map((skill, i) => {
    return <JobsCardSkills skillId={skill.id} key={`${i} ${skill.id}`} />;
  });
  return (
    <section className="job-card">
      <h2>{job.attributes.title}</h2>
      <p>Related Skills:</p>
      <div className="skills">{skillsElement}</div>
      <Link className="job-link" to={"/job/" + job.id}>
        View Job details
      </Link>
    </section>
  );
};
