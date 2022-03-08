import { useEffect, useState } from "react"
import {NavLink} from "react-router-dom"

function Sidebar(){

    const user_id = 1
    const [playlists, setPlaylists] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/users/${user_id}/playlists`)
        .then(resp => resp.json())
        .then(playlistData => {
            setPlaylists(playlistData)
        })
    },[])

    return(
        <div>
            <NavLink to="/">
                Dotify
            </NavLink>
            <NavLink to="/songs">
                All Songs
            </NavLink>
            {playlists.map((playlist)=>{
                return(
                <NavLink to={`/playlist/${playlist.id}`}>
                    {playlist.name}
                </NavLink>
                )
            }
            )}
        </div>
    )

}

export default Sidebar