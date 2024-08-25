import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Home, Search, Job, Skill } from "./pages";

function App() {
  const JobsRoutes = () =>
    ["/", "/jobs"].map((path) => (
      <Route key={path} path={path} element={<Home />} />
    ));
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {JobsRoutes()}
        <Route path="/jobs/search" element={<Search />} />
        <Route path="/job/:uuid" element={<Job />} />
        <Route path="/skill/:uuid" element={<Skill />} />
      </Route>
    </Routes>
  );
}

export default App;
