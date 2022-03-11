import React from 'react'
import { NavLink } from 'react-router-dom'

function Search({playlistId, searchToAllSongs, setSearch, search}) {

    let determineNavLink = () => {
        if (searchToAllSongs && window.location.href !== "http://localhost:3000/songs") {return `/songs`}
        else if (window.location.href === "http://localhost:3000/songs") {return `/songs`}
        else {return `/playlist/${playlistId}`}
    }




return (
    <div className="search-container">
        <NavLink to={determineNavLink}
        >
        <input 
            value={search} 
            className='search' 
            placeholder="Search songs"
            onChange={(e) => setSearch(e.target.value)}
        ></input>
        </NavLink>
    </div>
  )
}

export default Search