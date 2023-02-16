// import { useEffect, useState } from "react";
// import { Card, Col, Container, Row, Button } from "react-bootstrap";
// import {useNavigate} from "react-router-dom"

// function SongOfTheDay({bestSong, setBestSong}){

//     const navigate = useNavigate();
//     const [artistData, setArtistData] = useState([])
//     require(`dotenv`).config()
//     const apiKey = process.env.API_KEY;



//     // useEffect(() => {
//     //     console.log(apiKey)
//     //     fetch(`https://api.musixmatch.com/ws/v1.1/track.get?apikey=${apiKey}`)
//     // }, [])

//     return(
//         <Container>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <Row>
//                 <Col></Col>
//                 <Col xs={6}>
//                     {bestSong ?
//                     <Card bg="dark">
//                         <Card.Header>
//                             <Card.Title>Your Song of the Day is:</Card.Title>
//                             <Card.Title>{bestSong.title}</Card.Title>
//                         </Card.Header>
//                         <Card.Img src={bestSong.image}/>
//                         <Card.Body>
//                             <Card.Text>{bestSong.description}</Card.Text>
//                         </Card.Body>
//                         <Card.Footer>
//                             <Button variant="info" onClick={(e) => {navigate(`/songs/${bestSong.id}/view`)}}>More about this song</Button>
//                             <Button variant="info" onClick={(e) => {navigate(`/songs`)}}>Let me view more songs</Button>
//                             <Button variant="danger" onClick={(e) => setBestSong(null)}>I'm tired of this song</Button>
//                         </Card.Footer>
//                     </Card>:
//                     <Card bg="dark">
//                         <Card.Header>
//                             <Card.Title>You don't have a Song of the Day...</Card.Title>
//                             <Card.Text>Maybe you should choose one from the Song Gallery...</Card.Text>
//                         </Card.Header>
//                         <Card.Body>
//                             <Button variant="primary" onClick={(e) => {navigate("/songs")}}>Bring me to the Song Gallery</Button>
//                         </Card.Body>
//                         <Card.Footer>
//                             <Button variant="info" onClick={(e) => {navigate("/")}}>Bring me back home!</Button>
//                         </Card.Footer>
//                     </Card>}

//                 </Col>
//                 <Col>
//                 {bestSong ? <Card bg="dark">
//                         <Card.Title>Facts about {bestSong.artist}</Card.Title>
//                         <Card.Body>
//                             <Card.Text>He ranks </Card.Text>
//                         </Card.Body>
//                         <Card.Footer>
//                             <Card.Img src={require("./Type_Extended_Black.png")}/>
//                         </Card.Footer>
//                     </Card> :
//                     null}

//                 </Col>
//             </Row>

//         </Container>
//     );
// }

// export default SongOfTheDay;
