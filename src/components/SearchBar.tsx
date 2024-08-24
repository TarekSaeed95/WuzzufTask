import { FaSearch } from "react-icons/fa";
import { setSearchTerm } from "../redux/features";
import { useAppDispatch } from "../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import _debounce from "lodash/debounce";
export const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const changeInputHandler = (term: string) => {
    setValue(term);
    debounceFn(term);
  };

  const handleDebounceFn = (inputValue: string) => {
    dispatch(setSearchTerm(inputValue));
    if (inputValue.length > 2 && location.pathname !== "/jobs/search") {
      navigate("/jobs/search");
    }
  };

  const debounceFn = useCallback(_debounce(handleDebounceFn, 500), []);
  return (
    <section className="search-section">
      <div className="search-container">
        <input
          value={value}
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
