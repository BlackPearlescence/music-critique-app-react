


import {Route, Routes} from "react-router-dom";
import React,{ useEffect, useState } from "react";
import Home from "./components/Home.js";
import AllSongsGallery from "./components/AllSongsGallery.js";
import SongOfTheDay from "./components/SongOfTheDay.js";
import SongView from "./components/SongView.js";
import Header from "./components/Header.js";
import { useNavigate } from "react-router-dom";

 function App() {
  const [songs, setSongs] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(false)

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };


  const [genres, setGenres] = useState([])
  const [bestSong, setBestSong] = useState(null)
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
        const songData = await fetch("http://localhost:4000/songs")
        const songJson = await songData.json()
        console.log(songJson)
        setSongs(songJson)

        const genreData = await fetch("http://localhost:4000/genres")
        const genreJson = await genreData.json()
        console.log(genreJson)
        setGenres([...genreJson])
    }

    fetchData()
      .catch((err) => console.log(err))
     

  },[])
  return (
    <div className={isDarkMode ? 'App' : 'App.light'}>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onToggleDarkMode={onToggleDarkMode}
      />
      <Routes>
        <Route exact path="/" element={<Home isDarkMode={isDarkMode} />} />

          <Route path="/songs" element={<AllSongsGallery songs={songs} setSongs={setSongs} genres={genres} isDarkMode={isDarkMode}/>}/>

          <Route path="/songoftheday" element={<SongOfTheDay bestSong={bestSong} setBestSong={setBestSong} />} />

          <Route path="/songs/:id/view" element={<SongView songs={songs} setSongs={setSongs} bestSong={bestSong} setBestSong={setBestSong} />}/>
        </Routes>
        {/* <NewCommentForm 
        comments={comments}
        setComments={setComments}
        /> */}
       
    </div>
  );
}

export default App;
