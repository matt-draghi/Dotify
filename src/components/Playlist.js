import SongCard from "./SongCard"
import {NavLink} from "react-router-dom"


function Playlist ({setPlaylistId, playlists, userId, playlistId, currentPlaylistSongs, fetchPlaylistSongs}) {
    const selectedPlaylist = playlists.find(playlist => playlist.id === playlistId)
    
    const playlistSongs = currentPlaylistSongs?.map((song) => {
        return (
            <SongCard 
                key={song.id} 
                selectedPlaylist={selectedPlaylist} 
                song={song}
                userId={userId}
                setPlaylistId={setPlaylistId}
                fetchPlaylistSongs={fetchPlaylistSongs}
            />
        )
    })
    
    // console.log(currentPlaylistSongs)
    // console.log(playlistId)

    const playlistDeleteClick = () =>{

        console.log(selectedPlaylist)
        fetch(`http://localhost:9292/users/${userId}/playlists/${playlistId}`,{
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(()=>{
            setPlaylistId(null)
            return(
                window.alert(`Playlist "${selectedPlaylist.name}" has been deleted`)
            )
        })
    
    }
    
    return(
        <div>
            <div className="playlist-container">
                {playlistId ? <h1>{selectedPlaylist.name}</h1> : 
                    <div>
                        <h1>Error</h1>
                        <h3>Please try clicking on the playlist again</h3>
                    </div>
                }
            {playlistSongs}
            </div>
            <div className="delete-button">
                <button onClick={playlistDeleteClick}>
                    <NavLink to="/">Delete Playlist</NavLink>
                </button>
            </div>
        </div>
    )
}

export default Playlist