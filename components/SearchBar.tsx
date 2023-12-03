"use client";
import React, { useState } from "react";
import { SearchManufecturer } from ".";

const SearchBar = () => {
  const [manufecturer, setManufecturer] = useState();
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufecturer
          manufecturer={manufecturer}
          setManufecturer={setManufecturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
