import SongCard from "./SongCard"

function Playlist ({playlists, userId, playlistId, currentPlaylistSongs}) {
    const selectedPlaylist = playlists.find(playlist => playlist.id === playlistId)
    
    const playlistSongs = currentPlaylistSongs?.map((song) => {
        return <SongCard key={song.id} song={song}/>
    })
    
    console.log(currentPlaylistSongs)
    console.log(playlistId)
    
    return(
        <div>
            {playlistId ? <h1>{selectedPlaylist.name}</h1> : 
                <div>
                    <h1>Error</h1>
                    <h3>Please try clicking on the playlist again</h3>
                </div>
            }
            {playlistSongs}
        </div>
    )
}

export default Playlist