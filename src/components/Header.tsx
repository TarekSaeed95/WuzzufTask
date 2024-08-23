import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container flex">
        <h2>JobsNow</h2>
        <nav>
          <ul>
            <li>
              <Link to={"/jobs"}>Home</Link>
            </li>
            <li>
              <Link to={"jobs/search"}>Search</Link>
            </li>
            <li>History</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
