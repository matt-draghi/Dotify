function SongCard({song}){

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
        </div>
    )
}

export default SongCard