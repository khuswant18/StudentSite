import React from "react";
import "./SearchBar.css";
import { Search } from "lucide-react";

function SearchBar({ placeholder = "Search....", onSearch, onFilterChange }) {
  
  return (

    <div className="input-search">

      <div className="input-wrapper">
        <Search className="search-icon" />
        <input
          className="college-search"
          type="text"
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div> 

      <div className="filter-container">
        <label htmlFor="options">Filter by Course:</label>
        <select id="options" onChange={(e) => onFilterChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Biomedical Engineering">Biomedical Engineering</option>
        </select>
      </div>
     
      


    </div>
  );
}

export default SearchBar;
