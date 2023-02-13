import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom"
import React from "react-dom";
import Home from "./Home.js";
import AllSongsGallery from "./AllSongsGallery.js";
import SongOfTheDay from "./SongOfTheDay.js";
import SongView from "./SongView.js";
import NavBar from "./NavBar.js";
import Header from "/Header.js";

function App() {
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
