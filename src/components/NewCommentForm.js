import React from 'react';
import Form from 'react-bootstrap/Form'
import CommentCard from './CommentCard'
import CommentList from './CommentList'

function NewCommentForm() {

    // function handleClick(event) {  

        // function handleSubmit(event) {
        //     event.preventDefault();

        //     const newComment = document.querySelector('#comment').value
        // }

    //     fetch(``, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newComment)
    //     })
    //     .then(response => response.json())

    //     // add logic for new comment >>    setComments(prev => [...prev, newComment])
    // }

    return (
        <div>

            <CommentCard>
                <Form
                onSubmit={handleSubmit}
                >
                    <Form.Label>Comment Form</Form.Label>
                    <Form.Group widths='equal'>
                        <Form.Input
                        type="input"
                        id="comment"
                        placeholder="Comment" 
                        name="Comment"/>
                    </Form.Group>
                    <Form.Button onClick={handleClick}>Submit Comment</Form.Button>
                </Form>
            </CommentCard>
        </div>
    )
}

export default NewCommentForm;