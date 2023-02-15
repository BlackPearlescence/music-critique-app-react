

import {Route, Routes, Router} from "react-router-dom";
import React,{ useEffect, useState } from "react";
import Home from "./components/Home.js";
import AllSongsGallery from "./components/AllSongsGallery.js";
import SongOfTheDay from "./components/SongOfTheDay.js";
import SongView from "./components/SongView.js";
import Header from "./components/Header.js";

 function App() {
  const [songs, setSongs] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        const songData = await fetch("http://localhost:4000/songs")
        const songJson = await songData.json()
        console.log(songJson)
        setSongs(songJson)

        const genreData = await fetch("http://localhost:4000/genres")
        const genreJson = await genreData.json()
        console.log(genreJson)
        setGenres(genreJson)
    }

    fetchData()
      .catch((err) => console.log(err))
     

  },[])
  return (
    <div className="App">
      <AllSongsGallery songs={songs} setSongs={setSongs} genres={genres}/>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>

          {/* <Route path="/songs" element={<AllSongsGallery songs={songs} genres={genres}/>}/> */}

          <Route path="/songoftheday" element={<SongOfTheDay/>} />

          <Route path="/songs/:id/view" element={<SongView />}/>
        </Routes>
       
    </div>
  );
}

export default App;
