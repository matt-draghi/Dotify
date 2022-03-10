function SongCard({song}){

    return(
        <div className="playlist-song-container">
            
                <div className="song-card">
                    <a href={song.youtube_link} target="_blank" rel="noreferrer" className='song-link'>
                        <img alt={song.title} src={song.album.album_cover} width="120" height="120"/>
                        <div className="song-details">
                            <h4>{song.title} </h4>
                            <p>{song.album.artist.name}</p>
                        </div>
                    </a>
                </div>
            
        </div>
    )
}

export default SongCard