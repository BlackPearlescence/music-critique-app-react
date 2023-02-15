import CardGroup from "react-bootstrap/CardGroup";
import SongCard from "./SongCard.js"
import Row from "react-bootstrap/Row";
import Container  from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import NewSongForm from "./NewSongForm.js";
function SongList({songs, genres}){
    
    return(
        <div>
            <Container>
                <Row>
                    <NewSongForm/>
                    {songs.map(song => <SongCard key={song.id} song={song}/>)}
                </Row>
            </Container>
        </div>
    );
}

export default SongList;