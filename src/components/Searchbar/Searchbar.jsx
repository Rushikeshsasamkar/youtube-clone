import React from 'react';
import '../../public/Searchbar.css';

const Searchbar = () => {
  return (
    <div className='searchBar' style={{ zIndex: 101, position: 'relative' }}>
      <input className='search' placeholder='Search' />
    </div>
  );
};

export default Searchbar;
