import { useJobs } from "../api";
import { JobCardComponent, SearchBar } from "../components";

export const Home = () => {
  const { data: jobsResponse } = useJobs();
  const jobs = jobsResponse?.data.jobs || [];
  const meta = jobsResponse?.data.meta || {};
  const jobsCards = jobs.map((job) => (
    <JobCardComponent key={job.id} job={job} />
  ));
  return (
    <section className="home-page">
      <SearchBar />
      <div className="container">
        <h1>All Jobs</h1>
        <div className="jobs-container">{jobsCards}</div>
      </div>
    </section>
  );
};
