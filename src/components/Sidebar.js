// import { useEffect, useState } from "react"
import {NavLink} from "react-router-dom"

function Sidebar({setPlaylists, playlists, setPlaylistId, fetchPlaylistSongs, setCurrentPlaylistSongs, userId}){

    const onPlaylistClick = (playlist) =>{
        setPlaylistId(playlist.id)
        fetchPlaylistSongs(playlist)
        // fetch(`http://localhost:9292/users/${userId}/playlists/${playlist.id}`)
        // .then(resp => resp.json())
        // .then(playlist => {
        //     setCurrentPlaylistSongs(playlist)
        //     console.log("current playlist songs", playlist)
        // })        
    }

    function handleNewPlaylistClick () {
        let newPlaylist = {
            name: `Playlist #${[playlists.length + 1]}`     
        }
        fetch(`http://localhost:9292/users/${userId}/playlists`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(newPlaylist)
        })
        .then(r => r.json())
        .then(newPlaylist => setPlaylists(playlists => [...playlists, newPlaylist]))
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
                    >
                        {playlist.name}
                    </NavLink>
                )
            })}
        </div>
    )

}

export default Sidebar