import { useState } from "react"

function SongCard({song, setVideoId, videoId}){

    
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleSongPlay = () => {
        setVideoId(null)
        setModalIsOpen(true)
        extractVideoID(song.youtube_link)
        
    }

    const closeModal = () =>{
        setModalIsOpen(false)
        setVideoId(null)
    }

    const minimizeModal = () =>{
        setModalIsOpen(false)
    }

    const extractVideoID = (url) => {
        const videoCode = url.split("v=")[1].split("&")[0];
        setVideoId(videoCode)
      }

    return(
        <div className="playlist-song-container">
            
             <div className="song-card">
                <img alt={song.title} src={song.album.album_cover} width="120" height="120" onClick={handleSongPlay}/>
                <div className="song-details">
                    <h4>{song.title}</h4>
                    <p>{song.album.artist.name}</p>
                    <p>{`Length: ${new Date(song.duration * 1000).toISOString().substr(14, 5)}`}</p>
                </div>
            </div>

            <div className={modalIsOpen ? 'iframe-modal-active' : 'iframe-modal'} id='iframe-modal'>
                <div className='iframe-modal-header'>
                    <div className='iframe-title'>
                        {song.title}
                    </div>
                    <div className="iframe-button-container">
                        <button title="minimize" onClick={minimizeModal}className='iframe-button'>🗕</button>
                        <button title="close" onClick={closeModal}className='iframe-button'>x</button>
                    </div>
                </div>
                <div className='iframe-modal-body'>
                <iframe className="iframe-video" title={song.name} src={`https://www.youtube-nocookie.com/embed/${videoId}`}></iframe>
                </div>
            </div>
            <div id={modalIsOpen ? 'iframe-overlay-active' : 'iframe-overlay'}> </div>
        </div>
    )
}

export default SongCard