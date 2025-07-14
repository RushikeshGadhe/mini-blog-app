import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search blog titles..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      style={{
        padding: '10px',
        marginBottom: '20px',
        width: '100%',
        boxSizing: 'border-box',
        fontSize: '16px',
      }}
    />
  );
}

export default SearchBar;
