import { useLocation } from "react-router-dom";
import { useJobById } from "../api";
import { Loader, SkillsCard, RelatedJob } from "../components";
import { useAppSelector } from "../hooks";
import { useIsFetching } from "react-query";

export const Job = () => {
  const relatedJobsIds = useAppSelector(
    (state) => state.relatedJobs.relatedJobsIds
  );
  const jobId = useLocation().pathname.split("/").pop() || "";
  const { data: jobByIdResponse, isLoading: isLoadingJob } = useJobById(jobId);
  const isFetchingSkills = useIsFetching(["skills/getById"]);
  const isFetchingJobs = useIsFetching(["jobs/getById"]);
  const jobData = jobByIdResponse?.data.job;

  const skillElement = jobData?.relationships.skills.map((skill, i) => (
    <SkillsCard key={skill.id + i} skillId={skill.id} />
  ));
  const jobsElement = relatedJobsIds?.jobsIds
    .filter((job) => job !== jobId)
    .map((jobId, i) => <RelatedJob key={jobId + i} jobId={jobId} />);

  if (isLoadingJob) return <Loader className="mt-100" />;
  return (
    <section className="job-details-page">
      <div className="container">
        <h1 className="title">{jobData?.attributes.title}</h1>
        <section className="related">
          <section className="related-skills">
            <h2 className="subtitle">Related Skills:</h2>
            <section className="content">{skillElement}</section>
          </section>
          <section className="skill-related-jobs">
            <h2 className="subtitle">Related Jobs:</h2>
            <section className="content">
              {isFetchingSkills || isFetchingJobs ? (
                <Loader className="border-white" />
              ) : (
                jobsElement
              )}
            </section>
          </section>
        </section>
      </div>
    </section>
  );
};
