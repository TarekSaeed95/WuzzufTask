import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  return (
    <section className="search-section">
      <div className="search-container">
        <input type="text" placeholder="search keyword" />
        <FaSearch />
      </div>
    </section>
  );
};
