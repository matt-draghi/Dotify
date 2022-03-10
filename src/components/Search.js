import React from 'react'

function Search({setSearch, search}) {
  
  
  
return (
    <div className="search-container">
        <input 
            value={search} 
            className='search' 
            placeholder="Search songs"
            onChange={(e) => setSearch(e.target.value)}
        ></input>
    </div>
  )
}

export default Search