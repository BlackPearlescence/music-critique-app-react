import { Container } from "react-bootstrap";
import SongCard from "./SongCard.js"
function SongList({songs}){
    return(
        <div>
            <Container>
                {songs.map(song => <SongCard key={song.id} song={song}/>)}
            </Container>
        </div>
    );
}

export default SongList;