import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Home() {
  const [allSongs, setAllSong] = useState([])

  const mostPopularSong = 


  useEffect(() => {
    // fetch the 3 most recently added projects from json-server
    fetch(" http://localhost:4000/songs?_sort=id&_order=desc&_limit=4")
      .then((r) => r.json())
      .then(allSongs => setAllSong(allSongs))

  }, []);

  return (
    <section className="box">
      <h2 style={{ fontSize: "3rem" }}>View All Music.</h2>
      <p>
      Welcome to the Music App Project! This project is designed to allow users to experience the joy of music in a new and exciting way. With our app, users will be able to add their favorite songs to their personal library, search for new and exciting music, and even share their discoveries with friends and other users. Whether you are a seasoned music aficionado or just discovering the world of sound, our app has everything you need to enhance your music experience. So let's dive in and discover the magic of music together!
      </p>
      <h3>Top 5 Rated Songs</h3>
      <section className="box">
        {allSongs.map((song) => (
          <p key={song.id} {...song}>{song.album}</p>
        ))}
      </section>

      <div style={{ margin: "1rem 0" }}>
        {/* <a href="/" className="button">
          View All Songs
        </a> */}
        <Button variant="primary" size="lg">
        View All Songs
      </Button>
      </div>
    </section>
  )
}

export default Home;


