import { useState, useEffect } from 'react'
import SongCard from './SongCard'

function SongList () {

    const [allSongs, setAllSongs] = useState([])

    useEffect (() => {
        fetch(`http://localhost:9292/songs`)
            .then(r => r.json())
            .then(songs => setAllSongs(songs))
    }, [])
   
    return(
        allSongs.map(song => {
            return(
                <SongCard key={song.id} song={song}/>
            )
        })
    )
}

export default SongList