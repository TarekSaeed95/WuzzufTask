import { Link } from "react-router-dom";

export const JobCardComponent = () => {
  return (
    <section className="job-card">
      <h2>4th Grade Math Teacher</h2>
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
