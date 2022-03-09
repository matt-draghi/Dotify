function SongCard({song}){


    return(
        <div className="song-card">
            <img src={song.album.album_cover} width="60" height="60"/>
            <h4>{song.title}</h4>
            <p>{song.album.artist.name}</p>
        </div>
    )
}

export default SongCard