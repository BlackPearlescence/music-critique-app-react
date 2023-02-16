import Carousel from 'react-bootstrap/Carousel';

function Gallery({ allSongs }) {

  return (
    <Carousel className="card" variant="dark">
        {allSongs.map((song) => {
        return (
          <Carousel.Item key ={song.id}>
            <img className="card" src={song.image} alt={song.title}/>
            <Carousel.Caption>
              <h3>{song.title}</h3>
              <p>{song.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default Gallery;
