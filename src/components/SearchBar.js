// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <>
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
     </div>

     <div>
      <button onClick={handleSearch}>Search</button>
    </div>
    </>
  );
};

export default SearchBar;
