import { Link } from "react-router-dom";
import { Job } from "../types";
type JobCardComponentProps = {
  job: Job;
};
export const JobCardComponent = ({ job }: JobCardComponentProps) => {
  return (
    <section className="job-card">
      <h2>{job.attributes.title}</h2>
      <p>Related Skills:</p>
      <div className="skills">
        <p>operation</p>
        <p>active listening</p>
        <p>information ordering</p>
        <p>operation</p>
        <p>active listening</p>
        <p>information ordering</p>
      </div>
      <Link to={"/"}>View Job details</Link>
    </section>
  );
};
