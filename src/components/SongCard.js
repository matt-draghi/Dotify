function SongCard({song}){


    return(
        <div className="song-card">
            <img alt={song.title} src={song.album.album_cover} width="70" height="70"/>
            <div className="song-details">
                <h4>{song.title} </h4>
                <p>{song.album.artist.name}</p>
            </div>
        </div>
    )
}

export default SongCard