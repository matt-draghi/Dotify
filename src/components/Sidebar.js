import { useState } from "react"
import {NavLink} from "react-router-dom"

function Sidebar({setPlaylists, playlists, setPlaylistId, fetchPlaylistSongs, userId}){

    const onPlaylistClick = (playlist) =>{
        setPlaylistId(playlist.id)
        fetchPlaylistSongs(playlist)      
    }

    const [hover, setHover] = useState(false)
    const [target, setTarget] = useState(null)
    const [targetUrl, setTargetUrl] = useState("")
    const [modal, setModal] = useState(false)
    const [input, setInput] = useState("")

    function handleNewPlaylist () {
        let newPlaylist = {
            name: `Playlist #${[playlists.length + 1]}`     
        }
        fetch(`http://localhost:9292/users/${userId}/playlists`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPlaylist),
        })
        .then(r => r.json())
        .then(newPlaylist => {
            setPlaylists(playlists => [...playlists, newPlaylist])
        })
    }

    function showNameEditor () {
        setModal(true)
        setInput(target)
    }

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    function savePlaylistName () {
        
        if (input.length === 0) {
            alert("Names must be at least one character")
        }
        else {
           
            let updatedName = input
            if(playlists.find(playlist => playlist.name.includes(input))){
                const identicalPlaylists = playlists.filter(playlist => playlist.name.includes(input))
                const setNewDuplicateId = identicalPlaylists.length + 1
                const duplicateName = `${input} (${setNewDuplicateId})`
                updatedName = duplicateName
            }

            let id = (targetUrl.split('/').pop())
            fetch(`http://localhost:9292/users/${userId}/playlists/${id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: updatedName}),
            })
            .then(r => r.json())
            .then(updatedPlaylist => {
                setModal(false)
                setPlaylistId(null)
                setPlaylistId(updatedPlaylist.id)
            })
        }
        
    }  
    
    const playlistDeleteClick = () =>{
        let id = (targetUrl.split('/').pop())

        fetch(`http://localhost:9292/users/${userId}/playlists/${id}`,{
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then((deletedPlaylist)=>{
            setPlaylistId(deletedPlaylist.id)
            setPlaylistId(null)
        })
    
    }

    return(
        <div className="sidebar">

            {/* STRETCH TODO: switch user button */}
            
            <NavLink to="/" className="nav-link">
                <h1>Dotify</h1>
            </NavLink>

            {/* TODO: Insert search bar that filters songs*/}

            <NavLink to="/songs" className="nav-link">
                All Songs
            </NavLink>
            <p 
                onClick={handleNewPlaylist}
                className="nav-link">
                    Create Playlist
            </p>
            {playlists.map((playlist)=>{
                return(
                    <div key={playlist.name}
                        className="playlist-links"
                        onMouseEnter={(e) => {
                            setHover(true) 
                            setTarget(e.target.innerText)
                            if (e.target.href) {setTargetUrl(e.target.href)}
                        }}
                        onMouseLeave={(e) => {
                            setHover(false) 
                        }}
                    >
                        <NavLink 
                            className="nav-link"
                            to={`/playlist/${playlist.id}`} 
                            onClick={() => onPlaylistClick(playlist)}>
                            {playlist.name}
                        </NavLink>
                        {hover && playlist.name === target ? 
                        <div>
                            <button 
                                title="Rename playlist"
                                className="edit-button"
                                onClick={showNameEditor}>
                                    ✎
                            </button>
                            <button
                                title="Delete playlist"
                                onClick={playlistDeleteClick}><NavLink to="/">🗑️</NavLink></button>
                        </div> : null}
                            <div className={modal ? 'modal-active' : 'modal'} id='modal'>
                                <div className='modal-header'>
                                    <div className='title'>Rename Playlist</div>
                                    <button onClick={() => setModal(false)}className='close-button'>x</button>
                                </div>
                                <div className='modal-body'>
                                    <input onChange={handleInputChange} value={input}></input>
                                    <button onClick={savePlaylistName}>Save</button>
                                </div>
                            </div>
                            <div id={modal ? 'overlay-active' : 'overlay'}> </div>
                        
                    </div>
                )
            })}
        </div>
    )

}

export default Sidebar

