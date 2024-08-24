import { useLocation } from "react-router-dom";
import { useJobById } from "../api";
import { SkillsCard } from "../components";

export const Job = () => {
  const jobId = useLocation().pathname.split("/").pop() || "";
  const { data: jobByIdResponse } = useJobById(jobId);
  const jobData = jobByIdResponse?.data.job;
  const skillElement = jobData?.relationships.skills.map((skill, i) => (
    <SkillsCard key={skill.id + i} skillId={skill.id} />
  ));
  return (
    <section className="job-details-page">
      <div className="container">
        <h1 className="title">{jobData?.attributes.title}</h1>
        <section className="related-skills">
          <h2 className="subtitle">Related Skills:</h2>
          <section className="content">{skillElement}</section>
        </section>
      </div>
    </section>
  );
};
