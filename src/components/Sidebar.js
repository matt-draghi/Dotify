// import { useEffect, useState } from "react"
import {NavLink} from "react-router-dom"

function Sidebar({playlists, setPlaylistId, setCurrentPlaylistSongs, userId}){

    const onPlaylistClick = (playlist) =>{
        setPlaylistId(playlist.id)
        fetch(`http://localhost:9292/users/${userId}/playlists/${playlist.id}`)
        .then(resp => resp.json())
        .then(playlist => {
            setCurrentPlaylistSongs(playlist)
            console.log("current playlist songs", playlist)
        })        
    }

    return(
        <div className="sidebar">
            <NavLink to="/">
                Dotify
            </NavLink>
            <NavLink to="/songs">
                All Songs
            </NavLink>
            {playlists.map((playlist)=>{
                return(
                    <NavLink 
                        key={playlist.name} 
                        to={`/playlist/${playlist.id}`} 
                        onClick={() => onPlaylistClick(playlist)}
                    >
                        {playlist.name}
                    </NavLink>
                )
            })}
        </div>
    )

}

export default Sidebar