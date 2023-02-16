import React, { useState } from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {v4} from "uuid"

function NewCommentForm({comments = [], setComments,songs,setSongs,songId}) {

    const [validated, setValidated] = useState(false)
    const [commentField, setCommentField] = useState("")

    // function handleClick(event) {

    //     fetch(``, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newComment)
    //     })
    //     .then(response => response.json())

    //     // add logic for comment
    // }

    const handleCommentSubmit = (e) => {
        const form = e.currentTarget
        e.preventDefault()

        setValidated(false)
        if(form.checkValidity() === false){
            e.stopPropagation()
        }
        else{
            const newComment = {
                id: v4(),
                username: "Me!",
                icon: "https://s.abcnews.com/images/US/fox-01-as-gty-181019_hpMain_4x3t_992.jpg",
                commentText: commentField,
                likes: 0,
            }
    
            const updatedComments = [...comments, newComment]
            // const updatedSongs = [...songs]
            // updatedSongs.comments = updatedComments
            // setSongs(updatedSongs)
    
    
            fetch(`http://localhost:4000/songs/${songId}`,{
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({comments: updatedComments})
            })
    
            setComments([...comments, newComment])
            
            setValidated(true)
        }
        
    }



    const handleCommentChange = (e) => {
        setCommentField(e.target.value)
    }
    
    
    return (
        <div>   
            <h3>Add A Comment!</h3>
                <Form noValidate validated={validated} onSubmit={handleCommentSubmit}>
                    <Form.Group widths='equal'>
                            <Form.Control
                                style={{height: "100px"}}
                                as="textarea"
                                id="comment"
                                fluid label="Comment" 
                                placeholder="Add a Comment" 
                                name="Comment"
                                value={commentField}
                                onChange={handleCommentChange}
                                required/>
                            <Form.Control.Feedback type="invalid">No blank comments!</Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit Comment!</Button> 
                </Form>
        </div>
    )
}

export default NewCommentForm;