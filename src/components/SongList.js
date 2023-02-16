import CardGroup from "react-bootstrap/CardGroup";
import SongCard from "./SongCard.js"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import NewSongForm from "./NewSongForm.js";
function SongList({songs,setSongs, genres}){

    const songItem = songs.map(song => {
        return <SongCard setSongs={setSongs} key={song.id} songs={songs} song={song}/>
    })

    return(
<>
        {/* <div>
            <Container>
                <Row>
                    <NewSongForm/>
                    {songs.map(song => <SongCard setSongs={setSongs} key={song.id} songs={songs} song={song}/>)}

                </Row>
            </Container>
        </div> */}
        <section>
        <ul className="cards">{songItem}</ul>
        </section>

         </>
    );

}

export default SongList;
