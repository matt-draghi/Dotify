import React from "react";
import { Switch, Route } from "react-router-dom"
import Sidebar from "./sidebar";
import Home from "./home"
import Playlist from "./playlist";
import SongList from "./songlist";

function App() {
  return (
    <div className="App-container">
      <Sidebar />
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
        <Route exact path="/playlist/">
          <Playlist />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
