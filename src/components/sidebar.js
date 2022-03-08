import { useEffect, useState } from "react"
import {NavLink} from "react-router-dom"

function Sidebar({setCurrentPlaylist, userId}){

    const [playlists, setPlaylists] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/users/${userId}/playlists`)
        .then(resp => resp.json())
        .then(playlistData => {
            setPlaylists(playlistData)
        })
    },[])

    const onPlaylistClick = (playlist) =>{
        fetch(`http://localhost:9292/users/${userId}/playlists/${playlist.id}`)
        .then(resp => resp.json())
        .then(playlist => {
            console.log(playlist)
            setCurrentPlaylist(playlist)}
        )        
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
                    <NavLink key={playlist.name} to={`/playlist/${playlist.id}`} onClick={() => onPlaylistClick(playlist)}>
                        {playlist.name}
                    </NavLink>
                )
            }
            )}
        </div>
    )

}

export default Sidebar