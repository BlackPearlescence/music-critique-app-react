import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function SongCard({song}){
    return(
        <Card style={{ width: "18rem" }} >
            <Card.Img variant="top" src={song.image} />
            <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>Artist: {song.artist}</Card.Text>
                {/** Genres might or might not come in an array so they need to be displayed accordingly */}
                <Card.Text>
                    Genre: {typeof(song.genre) === "object" ? song.genre.map(genre => {
                    if(genre === song.genre[song.genre.length - 1]){
                        return <span>{genre}</span>
                    }
                    else{
                        return <span>{genre}, </span>
                    }
               }) : song.genre}
               </Card.Text>
               <div className="d-grid gap-2">
                <Button variant="primary" size="lg">View</Button>
                <Button variant="danger" size="lg">
                    Delete
                </Button>
               </div>
                
            </Card.Body>
        </Card>
    );
}

export default SongCard;