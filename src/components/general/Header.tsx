import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from "../../redux/features";

export const Header = () => {
  const dispatch = useDispatch();
  const clearSearchTerm = () => dispatch(setSearchTerm(""));
  return (
    <header>
      <div className="container flex">
        <h2>JobsNow</h2>
        <nav>
          <ul>
            <li>
              <Link to={"/jobs"}>Home</Link>
            </li>
            <li onClick={() => clearSearchTerm()}>
              <Link to={"jobs/search"}>Search</Link>
            </li>
            <li>History</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
