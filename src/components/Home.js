import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import Gallery from "./Gallery";


function Home() {
  const [allSongs, setAllSong] = useState([])
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/songs");
  }

  const mostPopularSong = useEffect(() => {
    // fetch the 3 most recently added projects from json-server
    fetch(' http://localhost:4000/songs?_sort=id&_order=desc&_limit=5')
      .then((r) => r.json())
      .then((allSongs) => setAllSong(allSongs));
    console.log(allSongs);
  }, []);

  return (
    <section>
      <h2 style={{ fontSize: '3rem' }}>Welcome to Sound Savant</h2>
      <p className="body-text">
        Welcome to the Music App Project! This project is designed to allow
        users to experience the joy of music in a new and exciting way. With our
        app, users will be able to add their favorite songs to their personal
        library, search for new and exciting music, and even share their
        discoveries with friends and other users. Whether you are a seasoned
        music aficionado or just discovering the world of sound, our app has
        everything you need to enhance your music experience. So let's dive in
        and discover the magic of music together!
      </p>

      <Gallery allSongs={allSongs} />
    </section>
  );
}

export default Home;


