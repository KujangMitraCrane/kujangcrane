import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ search, setSearch, isSearchOpen }) => {
  const searchEnter = () => {
    setSearch('');
  };

  return (
    <div className={`search ${isSearchOpen ? 'active' : ''}`}>
      <MdSearch />
      <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" />
      <button type="button" onClick={searchEnter}>
        Search
      </button>
    </div>
  );
};

export default Search;
