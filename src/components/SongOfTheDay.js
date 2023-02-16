
import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import APIKEY from "./APIKEY";

function SongOfTheDay({bestSong, setBestSong}){

    const navigate = useNavigate();
    const [artistData, setArtistData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    

    useEffect(() => {
        setIsLoaded(false)
        const handleMusixFetch = async () => {
            const data = await fetch(`/api/ws/1.1/artist.search?apikey=${APIKEY}&q_artist=${bestSong.artist}&page_size=5`)
            const json = await data.json()
            if(json){
                setIsLoaded(true)
            }
            setArtistData(json.message.body.artist_list[0]);
            console.log(json)
            console.log(artistData)

        }
        handleMusixFetch()
        console.log(artistData)
        console.log(artistData)
    }, [bestSong])


    return(
        <Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row>
                <Col>
                    
                </Col>
                <Col xs={6}>
                    {bestSong ? 
                    <Card bg="light">
                        <Card.Header>
                            <Card.Title>Your Song of the Day is:</Card.Title>
                            <Card.Title>{bestSong.title}</Card.Title>
                        </Card.Header>
                        <Card.Img src={bestSong.image}/>
                        <Card.Body>
                            <Card.Text>{bestSong.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button variant="info" onClick={(e) => {navigate(`/songs/${bestSong.id}/view`)}}>More about this song</button>
                            <button variant="info" onClick={(e) => {navigate(`/songs`)}}>Let me view more songs</button>
                            <button variant="danger" onClick={(e) => setBestSong(null)}>I'm tired of this song</button>
                        </Card.Footer>
                    </Card>:
                    <Card bg="light">
                        <Card.Header>
                            <Card.Title>You don't have a Song of the Day...</Card.Title>
                            <Card.Text>Maybe you should choose one from the Song Gallery...</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <button variant="primary" onClick={(e) => {navigate("/songs")}}>Bring me to the Song Gallery</button>
                        </Card.Body>
                        <Card.Footer>
                            <button variant="primary" onClick={(e) => {navigate("/")}}>Bring me back home!</button>
                        </Card.Footer>
                    </Card>}
                    
                </Col>
                <Col>
                {isLoaded ? <Card bg="light">
                        <Card.Title>Facts about {artistData.artist.artist_name}</Card.Title>
                        <Card.Body>
                            <Card.Text>Rating: {artistData.artist.artist_rating} </Card.Text>
                            <Card.Text>Country: {artistData.artist.artist_country}</Card.Text>
                            <Card.Text>Born on: {artistData.artist.begin_date}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Img src={require("./Type_Extended_Black.png")}/>
                        </Card.Footer>
                    </Card> :
                    null}
                    
                </Col>
            </Row>
            
        </Container>
    );
    
}

export default SongOfTheDay;