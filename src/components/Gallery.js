import Carousel from 'react-bootstrap/Carousel';
import { Link, useNavigate } from "react-router-dom";

function Gallery({ allSongs }) {
  const navigate = useNavigate()

  return (
    <Carousel className="card" variant="dark">
        {allSongs.map((song) => {
        return (
          <Carousel.Item onClick={(e) => {navigate(`/songs/${song.id}/view`)}}>
            <img className="card" src={song.image} alt={song.title}/>
            <Carousel.Caption>
              <h3>{song.title}</h3>
              {/* <p>{song.desc}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default Gallery;
