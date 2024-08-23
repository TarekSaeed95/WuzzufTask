import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/jobs" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
