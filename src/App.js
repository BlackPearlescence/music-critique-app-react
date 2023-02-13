
import './App.css';
import {Route, Routes} from "react-router-dom";
import React,{ useEffect, useState } from "react";
import Home from "./components/Home.js";
import AllSongsGallery from "./components/AllSongsGallery.js";
import SongOfTheDay from "./components/SongOfTheDay.js";
import SongView from "./components/SongView.js";
import NavBar from './components/NavBar.js';
import Header from "/components/Header.js";

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
