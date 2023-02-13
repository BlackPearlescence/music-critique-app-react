import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom"
import React,{ useEffect } from "react-dom";
import Home from "./Home.js";
import AllSongsGallery from "./AllSongsGallery.js";
import SongOfTheDay from "./SongOfTheDay.js";
import SongView from "./SongView.js";
import NavBar from "./NavBar.js";
import Header from "/Header.js";

function App() {
  const [songs, setSongs] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/songs")
      .then((res) => res.json())
      .then((songData) => setSongs(songData))
  },[])
  
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route >
          <AllSongsGallery />
        </Route>

        <Route>
          <SongOfTheDay />
        </Route>

        <Route>
          <SongView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
