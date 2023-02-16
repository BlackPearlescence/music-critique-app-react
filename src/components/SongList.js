import CardGroup from "react-bootstrap/CardGroup";
import SongCard from "./SongCard.js"
import Row from "react-bootstrap/Row";
import Container  from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import NewSongForm from "./NewSongForm.js";
function SongList({songs,setSongs, genres}){
    
    return(
        <div>
            <Container>
                <Row>
                    <NewSongForm/>
                    {songs.map(song => <SongCard setSongs={setSongs} key={song.id} songs={songs} song={song}/>)}
                </Row>
            </Container>
        </div>
    );
}

export default SongList;