import { useLocation } from "react-router-dom";
import { useSkillById } from "../api";
import { Loader, SkillRelatedJob, SkillRelatedSkill } from "../components";
import { useIsFetching } from "react-query";

export const Skill = () => {
  const skillId = useLocation().pathname.split("/").pop() || "";
  const { data: skillResponse, isLoading: isLoadingJobs } =
    useSkillById(skillId);
  const skillData = skillResponse?.data.skill;
  const isFetchingSkills = useIsFetching(["skills/getById"]);
  const isFetchingJobs = useIsFetching(["jobs/getById"]);

  const skillRelatedJobCardsElement = skillData?.relationships.jobs.map(
    (skillJob) => <SkillRelatedJob key={skillJob.id} skillJobId={skillJob.id} />
  );
  const skillRelatedSkillElement = skillData?.relationships.skills.map(
    (skillJob) => <SkillRelatedSkill key={skillJob.id} skillId={skillJob.id} />
  );

  if (isLoadingJobs) return <Loader className="mt-100" />;
  return (
    <section className="skill-page">
      <div className="container">
        <h1 className="title">{skillData?.attributes.name}</h1>
        <section className="related">
          <section className="related-jobs">
            <h2 className="description">Description:</h2>
            <p>
              knowledge of principles and methods for moving people or goods by
              air, rail, sea, or road, including the relative costs and
              benefits.
            </p>
            <h2 className="subtitle">Related Jobs:</h2>
            <section className="content">
              {isFetchingSkills || isFetchingJobs ? (
                <Loader />
              ) : (
                skillRelatedJobCardsElement
              )}
            </section>
          </section>
          <section className="skill-related-skills">
            <h2 className="subtitle">Related Skills:</h2>
            <section className="content">
              {isFetchingSkills || isFetchingJobs ? (
                <Loader className="border-white" />
              ) : (
                skillRelatedSkillElement
              )}
            </section>
          </section>
        </section>
      </div>
    </section>
  );
};
