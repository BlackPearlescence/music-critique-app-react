import React, { useState} from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

function NewCommentForm() {

    const [commentForm, setCommentForm] = useState({
        username: "",
        icon: "",
        commentText: "",
        likes: 0,
    })

    function handleClick(event) {

        fetch("http://localhost:4000/songs", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentForm)
        })
        .then(response => response.json())

        setCommentForm(prev => [...prev, commentForm])
    }

    const handleCommentSubmit = (e) => {
        handleClick();
    }

    return (
        <div>
            <h3>Add A Comment!</h3>
                <Form onSubmit={handleCommentSubmit}>
                    <Form.Group widths='equal'>
                            <Form.Control
                                style={{height: "100px"}}
                                as="textarea"
                                id="comment"
                                fluid label="Comment" 
                                placeholder="Add a Comment" 
                                name="Comment"/>
                    </Form.Group>
                    <Button variant="primary" type="submit"
                    onClick={handleClick}>Submit Comment!</Button> 
                </Form>
        </div>
    )
}

export default NewCommentForm;