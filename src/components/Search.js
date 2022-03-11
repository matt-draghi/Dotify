import React from 'react'
import { NavLink } from 'react-router-dom'

function Search({searchToAllSongs, setSearch, search}) {
  
    function navigateToSongs() {
        if (window.location.href === "http://localhost:3000/")
            window.location = "http://localhost:3000/songs" 
    }

    const url = window.location
    const { groups: { currentRoute } } = /http\:\/\/localhost\:\d{4}(?<currentRoute>[\w\/]*)/.exec(url)
    // let arr = []
    // arr.push(window.location.href.split('/'))
    // currentRoute.push(arr[arr.length-1])
    // console.log(currentRoute)
    
return (
    <div className="search-container">
        <NavLink to={searchToAllSongs ? `/songs` : `${currentRoute}`}>
        <input 
            value={search} 
            className='search' 
            placeholder="Search songs"
            onChange={(e) => setSearch(e.target.value)}
            onClick={navigateToSongs}
        ></input>
        </NavLink>
    </div>
  )
}

export default Search