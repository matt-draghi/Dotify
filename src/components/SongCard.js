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
                    <h4>{song.title} </h4>
                    <p>{song.album.artist.name}</p>
                </div>
            </div>

            <div className={modalIsOpen ? 'iframe-modal-active' : 'modal'} id='modal'>
                <div className='modal-header'>
                    <div className='title'>
                        {song.title}
                    </div>
                    <button onClick={minimizeModal}className='close-button'>🗕</button>
                    <button onClick={closeModal}className='close-button'>x</button>
                </div>
                <div className='modal-body'>
                <iframe title={song.name} src={`https://www.youtube.com/embed/${videoId}`}></iframe>
                </div>
            </div>
            <div id={modalIsOpen ? 'overlay-active' : 'overlay'}> </div>
        </div>
    )
}

export default SongCard