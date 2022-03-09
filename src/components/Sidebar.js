// import { useEffect, useState } from "react"
import {NavLink} from "react-router-dom"

function Sidebar({setPlaylists, playlists, setPlaylistId, fetchPlaylistSongs, userId}){

    const onPlaylistClick = (playlist) =>{
        setPlaylistId(playlist.id)
        fetchPlaylistSongs(playlist)      
    }

    function handleNewPlaylistClick () {
        let newPlaylist = {
            name: `Playlist #${[playlists.length + 1]}`     
        }
        fetch(`http://localhost:9292/users/${userId}/playlists`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPlaylist),
        })
        .then(r => {
            console.log(r)
            return (r.json())
        })
        .then(newPlaylist => {
            console.log("this works first")
            setPlaylists(playlists => [...playlists, newPlaylist])
            console.log("this works")
            setPlaylistId(newPlaylist.id)
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
            <p onClick={handleNewPlaylistClick}>Create Playlist</p>
            {playlists.map((playlist)=>{
                return(
                    <NavLink 
                        key={playlist.name} 
                        to={`/playlist/${playlist.id}`} 
                        onClick={() => onPlaylistClick(playlist)}
                        onPointerOver={() => console.log("hi there dev")}
                    >
                        {playlist.name}
                    </NavLink>
                )
            })}
        </div>
    )

}

export default Sidebar