import { FaSearch } from "react-icons/fa";
import { setSearchTerm } from "../../redux/features";
import { useAppDispatch } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useRef, useState } from "react";
import _debounce from "lodash/debounce";
import { Loader } from "./Loader";
import { useOutsideClicker } from "../../hooks";
type SearchBarProps = {
  suggestions?: string[];
  isLoadingSuggestions?: boolean;
};
export const SearchBar = ({
  suggestions,
  isLoadingSuggestions,
}: SearchBarProps) => {
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    setShowSuggestions(false);
    debounceFn(suggestion);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const changeInputHandler = (term: string) => {
    setValue(term);
    setShowSuggestions(term.length > 0);
    debounceFn(term);
  };
  const handleDebounceFn = (inputValue: string) => {
    if (inputValue.length > 2) {
      dispatch(setSearchTerm(inputValue));
      if (location.pathname !== "/jobs/search") {
        navigate("/jobs/search");
      }
    }
  };
  const searchBarRef = useRef(null);
  useOutsideClicker({
    actions: () => setShowSuggestions(false),
    ref: searchBarRef,
  });
  const debounceFn = useCallback(_debounce(handleDebounceFn, 500), []);
  const renderSuggestions = () => {
    const filteredSuggestions = suggestions?.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    if (isLoadingSuggestions)
      return (
        <li>
          <Loader />
        </li>
      );
    if (!filteredSuggestions?.length) {
      return <li>No suggestions found</li>;
    }
    return filteredSuggestions?.map((suggestion, index) => (
      <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
        {suggestion}
      </li>
    ));
  };
  return (
    <section className="search-section" ref={searchBarRef}>
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
        {showSuggestions && (
          <ul className="suggestions">{renderSuggestions()}</ul>
        )}
      </div>
    </section>
  );
};
