import { useJobs } from "../api";
import { JobCardComponent, Loader, SearchBar } from "../components";

export const Home = () => {
  const { data: jobsResponse, isLoading: isLoadingJobs } = useJobs();
  const jobs = jobsResponse?.data.jobs || [];
  const jobsCards = jobs.map((job) => (
    <JobCardComponent key={job.id} job={job} />
  ));
  if (isLoadingJobs) return <Loader className="mt-100" />;
  return (
    <section className="home-page">
      <SearchBar />
      <div className="container">
        <h1 className="title">All Jobs</h1>
        <div className="jobs-container">{jobsCards}</div>
      </div>
    </section>
  );
};
