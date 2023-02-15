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

    return (
        <div>
            <h3>Add A Comment!</h3>
                <Form
                onSubmit={() => {
                    console.log('Submitting New Comment')
                }}
                >
                <Form.Group widths='equal'>
                    <Form.Input
                    type="input"
                    id="comment"
                    fluid label="Comment" 
                    placeholder="Comment" 
                    name="Comment"/>
                </Form.Group>
                <Form.Button>Submit Comment</Form.Button>
=======
                </Form>
        </div>
    )
}
