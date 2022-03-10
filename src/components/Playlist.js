import SongCard from "./SongCard"
// import {NavLink} from "react-router-dom"


function Playlist ({setPlaylistId, playlists, userId, playlistId, currentPlaylistSongs, fetchPlaylistSongs}) {
    const selectedPlaylist = playlists.find(playlist => playlist.id === playlistId)
    
    const playlistSongs = currentPlaylistSongs?.map((song) => {
        
        const removeSong = () =>{
            console.log(song)
            fetch(`http://localhost:9292/users/${userId}/playlists/${selectedPlaylist.id}/${song.id}`,{
                method: "DELETE",
            })
            .then(resp => resp.json())
            .then(()=>{
                setPlaylistId(selectedPlaylist.id)
                fetchPlaylistSongs(selectedPlaylist)
            })
        }

        return (
            <div>
                <SongCard 
                    key={song.id} 
                    // selectedPlaylist={selectedPlaylist} 
                    song={song}
                    // userId={userId}
                    // setPlaylistId={setPlaylistId}
                    // fetchPlaylistSongs={fetchPlaylistSongs}
                />
                <button className="remove-song-from-playlist" onClick={removeSong}>
                    Remove from playlist
                </button>
            </div>
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