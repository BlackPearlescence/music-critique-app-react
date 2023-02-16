import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid"
import { Badge, Col, ToggleButton, ToggleButtonGroup, FloatingLabel, Alert} from "react-bootstrap";
function NewSongForm({showForm, setShowForm, genres = [], songs, setSongs}){
    console.log(genres)
    const [validated, setValidated] = useState(false);
    const [genresChosen, setGenresChosen] = useState([]);
    const [showCreateAlert, setShowCreateAlert] = useState(false);
    const [newSongFormData, setNewSongFormData] = useState({
        title: "",
        artist: "",
        album: "",
        genre: [],
        description: "",
        year: "",
        minutes: 0,
        seconds: 0,
        // songUrl: "",
        image: "",
    });
    const date = new Date()
    // console.log(genres)
    const handleFormClose = (e) => {setShowForm(false)}
    const handleGenreChange = (genres) => {
        setNewSongFormData({...newSongFormData, genre: genres})
        console.log(genresChosen)
    }
    
    const handleNewSongSubmit = (e) => {
        const form = e.currentTarget;
        console.log(form.checkValidity())
        setValidated(false)
        if(form.checkValidity() === false){
            e.stopPropagation();
            e.preventDefault();
        }
        // else{
            setValidated(true); 
            const newSong = {
                title: newSongFormData.title,
                artist: newSongFormData.artist,
                album: newSongFormData.album,
                genre: newSongFormData.genre,
                description: newSongFormData.description,
                year_released: newSongFormData.year.toString(),
                length: newSongFormData.minutes.toString() + ":" + newSongFormData.seconds.toString(),
                // songUrl: newSongFormData.songUrl,
                image: newSongFormData.image,
                comments: [],
                upvotes: 0,
                downvotes: 0,
            }
            e.preventDefault();
            fetch("http://localhost:4000/songs", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(newSongFormData)
            })
            console.log(newSong)
            newSong.id = uuidv4()
            setSongs([...songs, newSong])
        // }
       
            
       
    }

    const handleFormChange = (e) => {
        console.log(e)
        const {name, value} = e.target;
        setNewSongFormData({...newSongFormData, [name]: value})
        console.log(newSongFormData)
    }

    const handleModalFormClose = (e) => {
        setShowForm(false)
    }

    return(
        <Modal show={showForm} onHide={handleFormClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add a Song!</Modal.Title>
            </Modal.Header>
            <Form noValidate onSubmit={handleNewSongSubmit} validated={validated}>
                <Modal.Body>
                    <Form.Group controlId="1">
                        <Form.Label>Song Title</Form.Label>
                        <Form.Control name="title" type="text" placeholder="Song Title"
                        onChange={handleFormChange} required/>
                        <Form.Control.Feedback type="invalid">
                            Please enter a song title
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="2">
                        <Form.Label>Artist Name</Form.Label>
                        <Form.Control name="artist" type="text" placeholder="Artist Name"
                        onChange={handleFormChange} required/>
                        <Form.Control.Feedback type="invalid">
                            Please enter an artist name
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="3">
                        <Form.Label>Album</Form.Label>
                        <Form.Control name="album" type="text" placeholder="Album Name"
                        onChange={handleFormChange}/>
                        <Form.Control.Feedback type="valid">
                            Not every song belongs to an album I guess...
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Label>Genres</Form.Label>
                    <br/>
                    <ToggleButtonGroup name="genre" type="checkbox" value={newSongFormData.genre} onChange={handleGenreChange}>
                        {genres.map(genre => 
                        <ToggleButton
                            id={genre.id}
                            value={genre.genre}
                            key={genre.id}
                            variant="light">
                            {genre.genre}
                        </ToggleButton>)}
                    </ToggleButtonGroup>

                    <Form.Group>
                        <FloatingLabel label="Description">
                            <Form.Control
                            name="description"
                            as="textarea"
                            style={{ height: "100px" }}
                            onChange={handleFormChange}/>
                            <Form.Control.Feedback type="valid">
                                Optional
                            </Form.Control.Feedback>
                        </FloatingLabel>   
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Year Released</Form.Label>
                        <Form.Control name="year" type="number" min={1800} max={date.getFullYear()} 
                        onChange={handleFormChange} required/>
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid year
                        </Form.Control.Feedback>
                        
                    <Form.Label>Length</Form.Label>
                    </Form.Group>
                        <FloatingLabel label="minutes">
                            <Form.Control name="minutes" type="number" min={0} max={59} defaultValue={0}
                            onChange={handleFormChange}/>
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                        </FloatingLabel>
                        <FloatingLabel label="seconds">
                            <Form.Control name="seconds" type="number" min={0} max={59} defaultValue={0}
                            onChange={handleFormChange}/>
                            <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                        </FloatingLabel>
                    {/* <Form.Group>
                        <Form.Label>Spotify Link</Form.Label>
                        <Form.Control name="songUrl" type="text" placeholder="Spotify Link"
                        onChange={handleFormChange}/>
                        <Form.Control.Feedback type="invalid">Please enter a spotify link</Form.Control.Feedback>
                    </Form.Group> */}
                    <Form.Group>
                        <Form.Label>Song Image</Form.Label>
                        <Form.Control name="image" type="url" placeholder="Image Link" 
                        onChange={handleFormChange}/>
                        <Form.Control.Feedback type="invalid">Please enter an image link
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                   
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="primary">Add Song</Button>
                    <Button  onClick={handleModalFormClose} variant="secondary">Close</Button>
                </Modal.Footer>
            </Form>

            
            
        </Modal>

    );
}

export default NewSongForm;