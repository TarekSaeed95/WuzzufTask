import { useJobsSearch } from "../api";
import { JobCardComponent, Loader, SearchBar } from "../components";
import { useAppSelector } from "../hooks";

export const Search = () => {
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const { data: jobsSearchResponse, isLoading: isLoadingJobsSearch } =
    useJobsSearch({ name: searchTerm });
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
        {isLoadingJobsSearch && <Loader className="mt-100" />}
        {jobsCards.length ? (
          <>
            <h1 className="title">{`"${searchTerm}" jobs (${meta.count})`}</h1>
            <div className="jobs-container">{jobsCards}</div>
          </>
        ) : (
          <p className="no-result">No Results</p>
        )}
      </div>
    </section>
  );
};
