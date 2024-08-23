import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Home, Search, Job, Skill } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/jobs" element={<Home />} />
          <Route path="/jobs/search" element={<Search />} />
          <Route path="/job/:uuid" element={<Job />} />
          <Route path="/skill/:uuid" element={<Skill />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
