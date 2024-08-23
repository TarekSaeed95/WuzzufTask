import { JobCardComponent, SearchBar } from "../components";

export const Home = () => {
  return (
    <section className="home-page">
      <SearchBar />
      <div className="container">
        <h1>All Jobs</h1>
        <div className="jobs-container">
          <JobCardComponent />
        </div>
      </div>
    </section>
  );
};
