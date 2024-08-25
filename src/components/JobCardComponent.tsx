import { Link } from "react-router-dom";
import { Job } from "../types";
import { JobsCardSkills } from "./JobsCardSkills";
import { forwardRef } from "react";
type JobCardComponentProps = {
  job: Job;
};
export const JobCardComponent = forwardRef<HTMLElement, JobCardComponentProps>(
  function JobCardComponent({ job }, ref) {
    const skillsElement = job.relationships.skills.map((skill, i) => {
      return <JobsCardSkills skillId={skill.id} key={`${i} ${skill.id}`} />;
    });
    return (
      <section className="job-card" ref={ref}>
        <h2>{job.attributes.title}</h2>
        <p>Related Skills:</p>
        <div className="skills">{skillsElement}</div>
        <Link className="job-link" to={"/job/" + job.id}>
          View Job details
        </Link>
      </section>
    );
  }
);
