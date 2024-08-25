import { useJobs } from "../api";
import { JobCardComponent, Loader, SearchBar } from "../components";
import { useInfiniteScrolling } from "../hooks";

export const Home = () => {
  const {
    data: jobsResponse,
    isLoading: isLoadingJobs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useJobs();
  const jobs = jobsResponse?.pages.map((pg) => {
    return pg.data.jobs;
  });
  const { lastItemElementRef } = useInfiniteScrolling({
    Data: jobsResponse,
    fetchNextPage: fetchNextPage,
    isFetchingNextPage: isFetchingNextPage,
    hasNextPage: hasNextPage,
  });
  const jobsCards = jobs?.map((pg) =>
    pg.map((job, i) => (
      <JobCardComponent
        ref={pg.length === i + 1 ? lastItemElementRef : null}
        key={job.id}
        job={job}
      />
    ))
  );
  return (
    <section className="home-page">
      <SearchBar />
      <div className="container">
        {isLoadingJobs ? (
          <Loader className="mt-100" />
        ) : (
          <>
            <h1 className="title">All Jobs</h1>
            <div className="jobs-container">{jobsCards}</div>
            {isFetchingNextPage && <Loader className="mt-100 mb-100" />}
          </>
        )}
      </div>
    </section>
  );
};
