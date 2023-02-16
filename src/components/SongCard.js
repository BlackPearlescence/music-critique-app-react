import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function SongCard({songs, setSongs, song}){

    const handleDeleteSong = (e) => {
        fetch(`http://localhost:4000/songs/${song.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json",
            },
        })
        setSongs(songs.filter(songItem => songItem !== song ))
    }
    return(
        <Card style={{ width: "18rem" }} bg="dark" >
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
                <Link to={`/songs/${song.id}/view`}>
                    <Button variant="primary" size="lg" onClick={(e) => {console.log("click")}}>View</Button>
                </Link>
                <Button onClick={handleDeleteSong} variant="danger" size="lg">
                    Delete
                </Button>
               </div>
                
            </Card.Body>
        </Card>
    );
}

export default SongCard;