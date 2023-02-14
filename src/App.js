

import {Route, Routes} from "react-router-dom";
import React,{ useEffect, useState } from "react";
import Home from "./components/Home.js";
import AllSongsGallery from "./components/AllSongsGallery.js";
import SongOfTheDay from "./components/SongOfTheDay.js";
import SongView from "./components/SongView.js";
import Header from "./components/Header.js";

function App() {
  const [songs, setSongs] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };


  useEffect(() => {
    fetch("http://localhost:4000/songs")
      .then((res) => res.json())
      .then((songData) => setSongs(songData))
  },[])

  return (
    <div className="App">
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onToggleDarkMode={onToggleDarkMode} />
        <Routes>
          <Route exact path="/" element={<Home/>}/>

          <Route path="/songs" element={<AllSongsGallery songs={songs}/>}/>

          <Route path="/songoftheday" element={<SongOfTheDay/>} />

          <Route path="/:id/view" element={<SongView />}/>
        </Routes>

    </div>
  );
}

export default App;
