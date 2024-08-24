import { useJobsSearch } from "../api";
import { JobCardComponent, SearchBar } from "../components";
import { useAppSelector } from "../hooks";

export const Search = () => {
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const { data: jobsSearchResponse } = useJobsSearch({ name: searchTerm });
  const jobs = jobsSearchResponse?.data.jobs || [];
  const meta = jobsSearchResponse?.data.meta || {
    count: undefined,
    next: undefined,
  };
  const jobsCards = jobs.map((job) => (
    <JobCardComponent key={job.id} job={job} />
  ));

  return (
    <section className="search-page">
      <SearchBar />
      <div className="container">
        <h1>{`"${searchTerm}" jobs (${meta.count})`}</h1>
        <div className="jobs-container">{jobsCards}</div>
      </div>
    </section>
  );
};
