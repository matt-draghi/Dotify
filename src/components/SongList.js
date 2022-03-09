import { useState, useEffect } from 'react'
import SongCard from './SongCard'

function SongList ({playlists, userId}) {

    const [allSongs, setAllSongs] = useState([])
    const [addToPlaylist, setAddToPlaylist] = useState()

    useEffect (() => {
        fetch(`http://localhost:9292/songs`)
            .then(r => r.json())
            .then(songs => setAllSongs(songs))
    }, [])

    const addSongToPlaylist = (song) =>{
        const playlistToAddTo = playlists.find(playlist =>  playlist.name === addToPlaylist)
        if (playlistToAddTo === null || playlistToAddTo === undefined) {
            alert(`Please select a playlist to add this song to`)
        }
        else{
            const newPlaylistSong = {
                playlist_id: playlistToAddTo.id,
                song_id: song.id
            }

            fetch(`http://localhost:9292/users/${userId}/playlists/${playlistToAddTo.id}`,{
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newPlaylistSong),
            })
        }
    }

    return(
        allSongs.map(song => {

            const handleSubmit = (e) =>{
                e.preventDefault()
                console.log("playlist", addToPlaylist)
                console.log("song", song)
                addSongToPlaylist(song)
            }
        
            const handlePlaylistChange = (e) => {
                setAddToPlaylist(e.target.value)
            }

            return(
                <div key={song.id} >
                    <SongCard key={song.id} song={song}/>
                    <form onSubmit={handleSubmit}>
                        <select id="playlists" name="playlists" defaultValue={addToPlaylist} onChange={handlePlaylistChange}>
                            <option value="" disabled selected>Add to playlist</option>
                            {playlists.map((playlist)=>{
                                return(
                                    <option 
                                        key={playlist.name + playlist.id} 
                                        value={playlist.name}
                                    >
                                        {playlist.name}
                                    </option>
                                )
                            })}
                        </select>
                        <input type="submit" value="Add Song"/>
                    </form>
                </div>
            )
        })
    )
}

export default SongList