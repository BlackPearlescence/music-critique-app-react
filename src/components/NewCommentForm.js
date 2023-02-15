import React from 'react';
import Form from "react-bootstrap/Form"

function NewCommentForm() {

    function handleClick(event) {
        const newComment = document.querySelector('#comment').value

        fetch(``, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(response => response.json())

        // add logic for comment
    }

    const handleCommentSubmit = (e) => {

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
                    <Button variant="primary" type="submit">Submit Comment!</Button> 
                </Form>
        </div>
    )
}
