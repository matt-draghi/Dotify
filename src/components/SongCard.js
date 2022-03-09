function SongCard({song, selectedPlaylist, userId, setPlaylistId, fetchPlaylistSongs}){

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

    return(

        <div className="playlist-song-container">
            <a href={song.youtube_link} target="_blank" rel="noreferrer">
                <div className="song-card">
                    <img alt={song.title} src={song.album.album_cover} width="70" height="70"/>
                    <div className="song-details">
                        <h4>{song.title} </h4>
                        <p>{song.album.artist.name}</p>
                    </div>
                </div>
            </a>
            <button className="remove-song-from-playlist" onClick={removeSong}>
                Remove from playlist
            </button>

        </div>
    )
}

export default SongCard