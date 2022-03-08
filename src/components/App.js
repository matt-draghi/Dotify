import React, {useState} from "react";
import { Switch, Route } from "react-router-dom"
import Sidebar from "./sidebar";
import Home from "./home"
import Playlist from "./playlist";
import SongList from "./songlist";

function App() {

  const userId = 1
  // const [userId, setUserId] = useState(1)
  const [playlistId, setPlaylistId] = useState()
  const [currentPlaylist, setCurrentPlaylist] = useState()

  return (
    <div className="App-container">
      <Sidebar setCurrentPlaylist={setCurrentPlaylist} userId={userId}/>
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
          <Playlist playlistId={playlistId} userId={userId} currentPlaylist={currentPlaylist}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
