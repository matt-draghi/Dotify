import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom"
import Sidebar from "./Sidebar";
import Home from "./Home"
import Playlist from "./Playlist";
import SongList from "./SongList";
import "../styles/App.css"

function App() {

  const userId = 1
  // const [userId, setUserId] = useState(1)
  const [currentPlaylistSongs, setCurrentPlaylistSongs] = useState()
  const [playlists, setPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useState()
  const [videoId, setVideoId] = useState("")
  const [searchToAllSongs, setSearchToAllSongs] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch(`http://localhost:9292/users/${userId}/playlists`)
      .then(resp => resp.json())
      .then(playlistData => {
          setPlaylists(playlistData)
      })
  },[playlistId, currentPlaylistSongs])

  const fetchPlaylistSongs = (playlist) =>{
    fetch(`http://localhost:9292/users/${userId}/playlists/${playlist.id}`)
        .then(resp => resp.json())
        .then(playlist => {
            setCurrentPlaylistSongs(playlist)
        })
  }

  return (
    <div className="App-container">
      <Sidebar 
        playlists={playlists} 
        setPlaylists={setPlaylists} 
        userId={userId}
        setPlaylistId={setPlaylistId}
        fetchPlaylistSongs = {fetchPlaylistSongs}
        setSearch={setSearch}
        search={search}
        searchToAllSongs={searchToAllSongs}
        setSearchToAllSongs={setSearchToAllSongs}
        playlistId={playlistId}
      />
      <div className="main-content-container">
        <Switch>

        {/* Route home */}
          <Route exact path="/">
            <Home setSearchToAllSongs={setSearchToAllSongs}/>  
          </Route>

        {/* Route all songs */}
          <Route exact path="/songs">
            <SongList 
              playlists={playlists} 
              userId={userId}
              setVideoId={setVideoId}
              videoId={videoId}
              setPlaylistId={setPlaylistId}
              setSearchToAllSongs = {setSearchToAllSongs}
              search={search}
            />
          </Route>

        {/* Route selected playlist */}
          <Route path="/playlist">
            <Playlist 
              playlists={playlists} 
              userId={userId} 
              currentPlaylistSongs={currentPlaylistSongs}
              playlistId={playlistId}
              setPlaylistId={setPlaylistId}
              fetchPlaylistSongs={fetchPlaylistSongs}
              setVideoId={setVideoId}
              videoId={videoId}
              setSearchToAllSongs = {setSearchToAllSongs}
              search={search}
            />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
