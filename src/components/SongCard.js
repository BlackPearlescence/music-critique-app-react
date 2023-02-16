import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function SongCard({songs, setSongs, song}){

    const handleDeleteSong = (e) => {
        const handleDelete = async () => {
            await fetch(`http://localhost:4000/songs/${song.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type" : "application/json",
                },
            })
        }
        handleDelete()
        // fetch(`http://localhost:4000/songs/${song.id}`, {
        //     method: "DELETE",
        //     headers: {
        //         "Content-Type" : "application/json",
        //     },
        // })
        setSongs(songs.filter(songItem => songItem !== song ))
    }
    return(
        // <Card style={{ width: "18rem" }} bg="dark" >
        //     <Card.Img variant="top" src={song.image} />
        //     <Card.Body>
        //         <Card.Title>{song.title}</Card.Title>
        //         <Card.Text>Artist: {song.artist}</Card.Text>
        //         {/** Genres might or might not come in an array so they need to be displayed accordingly */}
        //         <Card.Text>
        //             Genre: {typeof(song.genre) === "object" ? song.genre.map(genre => {
        //             if(genre === song.genre[song.genre.length - 1]){
        //                 return <span>{genre}</span>
        //             }
        //             else{
        //                 return <span>{genre}, </span>
        //             }
        //        }) : song.genre}
        //        </Card.Text>
        //        <div className="d-grid gap-2">
        //         <Link to={`/songs/${song.id}/view`}>
        //             <Button variant="primary" size="lg" onClick={(e) => {console.log("click")}}>View</Button>
        //         </Link>
        //         <Button onClick={handleDeleteSong} variant="danger" size="lg">
        //             Delete
        //         </Button>
        //        </div>

        //     </Card.Body>
        // </Card>
        <li className="card">
       <figure className="image">
       <img src={song.image} alt={song.name} />
        </figure>
        <section className="details">
            <h4>{song.title}</h4>
            <p>Artist: {song.artist}</p>
            {/** Genres might or might not come in an array so they need to be displayed accordingly */}
            <p>
                Genre: {typeof(song.genre) === "object" ? song.genre.map(genre => {
                if(genre === song.genre[song.genre.length - 1]){
                    return <span>{genre}</span>
                }
                else{
                    return <span>{genre}, </span>
                }
           }) : song.genre}
           </p>
           <div className="manage">
            <Link to={`/songs/${song.id}/view`}>
                <button className="button" onClick={(e) => {console.log("click")}}>View</button>
            </Link>
            <button className="button" onClick={handleDeleteSong} >
                Delete
            </button>
           </div>

        </section>
    </li>
    );
}

export default SongCard;
