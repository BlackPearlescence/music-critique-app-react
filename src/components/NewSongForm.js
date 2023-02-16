import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid"
import { Badge, Col, ToggleButton, ToggleButtonGroup, FloatingLabel, Alert} from "react-bootstrap";
function NewSongForm({showForm, setShowForm, genres = [], songs, setSongs}){
    console.log(genres)
    const [isUndo, setIsUndo] = useState(false);
    const [genresChosen, setGenresChosen] = useState([]);
    const [showCreateAlert, setShowCreateAlert] = useState(false);
    const [newSongFormData, setNewSongFormData] = useState({
        title: "",
        artist: "",
        album: "",
        genre: [],
        description: "",
        songUrl: "",
        image: "",
    });
    // console.log(genres)
    const handleFormClose = (e) => {setShowForm(false)}
    const handleGenreChange = (genres) => {
        setNewSongFormData({...newSongFormData, genre: genres})
        console.log(genresChosen)
    }
    
    const handleNewSongSubmit = (e) => {
        const newSong = {
            title: newSongFormData.title,
            artist: newSongFormData.artist,
            album: newSongFormData.album,
            genre: newSongFormData.genre,
            description: newSongFormData.description,
            songUrl: newSongFormData.songUrl,
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
        setShowForm(false)
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
            <Form onSubmit={handleNewSongSubmit}>
                <Modal.Body>
                    <Form.Label>Song Title</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Song Title"
                    onChange={handleFormChange}/>
                    <Form.Label>Artist Name</Form.Label>
                    <Form.Control name="artist" type="text" placeholder="Artist Name"
                    onChange={handleFormChange}/>
                    <Form.Label>Album</Form.Label>
                    <Form.Control name="album" type="text" placeholder="Album Name"
                    onChange={handleFormChange}/>
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
                    <FloatingLabel label="Description">
                        <Form.Control
                        name="description"
                        as="textarea"
                        style={{ height: "100px" }}
                        onChange={handleFormChange}/>
                    </FloatingLabel>
                    <Form.Label>Spotify Link</Form.Label>
                    <Form.Control name="songUrl" type="text" placeholder="Spotify Link"
                    onChange={handleFormChange}/>
                    <Form.Label>Song Image</Form.Label>
                    <Form.Control name="image" type="text" placeholder="Image Link" 
                    onChange={handleFormChange}/>
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