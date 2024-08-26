import { useEffect } from "react";
import { useJobsSearch } from "../api";
import { JobCardComponent, Loader, SearchBar } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setSearchTermHistory } from "../redux/features";

export const Search = () => {
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const { data: jobsSearchResponse, isLoading: isLoadingJobsSearch } =
    useJobsSearch({ name: searchTerm });
  const jobs = jobsSearchResponse?.data.jobs || [];
  const meta = jobsSearchResponse?.data.meta || {
    count: undefined,
    next: undefined,
  };
  const jobsTitles = jobs.map((job) => job.attributes.title);
  const jobsCards = jobs.map((job) => (
    <JobCardComponent key={job.id} job={job} />
  ));
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (jobs.length && searchTerm) {
      dispatch(setSearchTermHistory(searchTerm));
    }
  }, [jobs]);
  const searchTermHistory = useAppSelector(
    (state) => state.search.searchTermHistory
  );
  const searchHistoryElement = searchTermHistory.map((searchTerm) => (
    <li key={searchTerm}>{searchTerm}</li>
  ));
  return (
    <section className="search-page">
      <SearchBar
        isLoadingSuggestions={isLoadingJobsSearch}
        suggestions={jobsTitles}
      />
      <div className="container">
        <section className="search-page-sections">
          {isLoadingJobsSearch ? (
            <Loader className="mt-100" />
          ) : jobsCards.length ? (
            <>
              <h1 className="title">{`${
                searchTerm ? `"${searchTerm}"` : ""
              } jobs (${meta.count})`}</h1>
              <section className="main-search-content">
                <div className="jobs-container">{jobsCards}</div>
                <section className="search-history skill-related-jobs">
                  <h2 className="subtitle">Search history:</h2>
                  <section className="content">{searchHistoryElement}</section>
                </section>
              </section>
            </>
          ) : (
            !isLoadingJobsSearch && <p className="no-result">No Results</p>
          )}
        </section>
      </div>
    </section>
  );
};
