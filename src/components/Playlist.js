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


    
    return(
        <div>
            <div className="playlist-container">
                {playlistId ? 
                
                    <div>
                        <h1>{selectedPlaylist.name}</h1>
                    </div>
                : 
                    <div>
                        <h1>Error</h1>
                        <h3>Please try clicking on the playlist again</h3>
                    </div>
                }
            {playlistSongs}
            </div>
        </div>
    )
}

export default Playlist