import { useState } from "react";
import "./searchbar.scss";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (value) => {
    setQuery({ ...query, type: value });
    console.log(query);
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => {
          return (
            <button
              key={type}
              onClick={() => switchType(type)}
              className={query.type === type ? "active" : ""}
            >
              {type}
            </button>
          );
        })}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000000}
          placeholder="Min Price"
        />

        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000000}
          placeholder="Max Price"
        />

        <button>
          <img src="/search.png" alt="searchIcon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
