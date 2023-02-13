
import './App.css';
import {Route, Routes} from "react-router-dom";
import React,{ useEffect, useState } from "react";
import Home from "./Home.js";
import AllSongsGallery from "./AllSongsGallery.js";
import SongOfTheDay from "./SongOfTheDay.js";
import SongView from "./SongView.js";
import Header from "./Header.js";

function App() {
  const [songs, setSongs] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/songs")
      .then((res) => res.json())
      .then((songData) => setSongs(songData))
  },[])

  return (
    <div className="App">
      <AllSongsGallery songs={songs}/>
      <Header />

      {/* <Routes>
        <Route>
          <Home />
        </Route>

        <Route>
          <AllSongsGallery songs={songs}/>
        </Route>

        <Route>
          <SongOfTheDay />
        </Route>

        <Route>
          <SongView />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
