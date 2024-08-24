import { FaSearch } from "react-icons/fa";
import { setSearchTerm } from "../redux/features";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const dispatch = useAppDispatch();
  const changeInputHandler = (term: string) => {
    dispatch(setSearchTerm(term));
    if (term.length > 2 && location.pathname !== "/jobs/search") {
      navigate("/jobs/search");
    }
  };
  return (
    <section className="search-section">
      <div className="search-container">
        <input
          value={searchTerm}
          onChange={(e) => {
            changeInputHandler(e.target.value);
          }}
          type="text"
          placeholder="search keyword"
        />
        <FaSearch />
      </div>
    </section>
  );
};
