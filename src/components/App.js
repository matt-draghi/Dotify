import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom"
import Sidebar from "./sidebar";
import Home from "./home"
import Playlist from "./playlist";
import SongList from "./songlist";
import "../styles/App.css"

function App() {

  const userId = 1
  // const [userId, setUserId] = useState(1)
  const [currentPlaylistSongs, setCurrentPlaylistSongs] = useState()
  const [playlists, setPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useState()

  useEffect(()=>{
    fetch(`http://localhost:9292/users/${userId}/playlists`)
      .then(resp => resp.json())
      .then(playlistData => {
          setPlaylists(playlistData)
          console.log("playlist data:", playlistData)
      })
  },[])

  return (
    <div className="App-container">
      <Sidebar 
        playlists={playlists} 
        setPlaylists={setPlaylists} 
        setCurrentPlaylistSongs={setCurrentPlaylistSongs} 
        userId={userId}
        setPlaylistId={setPlaylistId}
      />
      <div className="main-content-container">
        <Switch>

        {/* Route home */}
          <Route exact path="/">
            <Home />  
          </Route>

        {/* Route all songs */}
          <Route exact path="/songs">
            <SongList />
          </Route>

        {/* Route selected playlist */}
          <Route path="/playlist">
            <Playlist 
              playlists={playlists} 
              userId={userId} 
              currentPlaylistSongs={currentPlaylistSongs}
              playlistId={playlistId}
            />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
