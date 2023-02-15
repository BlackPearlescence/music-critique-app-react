import React from 'react';
import Form from 'react-bootstrap/Form'
import CommentCard from './CommentCard'
import CommentList from './CommentList'

function NewCommentForm({setComments}) {


        function handleClick(event) {
            event
        }

        function handleSubmit(event) {
            event.preventDefault();

            const newComment = document.querySelector('#comment').value
            fetch(`http://localhost:4000/songs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
            })
            .then(response => response.json(newComment))

            setComments(prev => [...prev, newComment])
        }

    return (
        <div>

            <CommentCard>
                <CommentList />
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
                        <div className="w-100">
                        </div>
                    </Form.Group>
                    <button onClick={handleClick}>
                    Send
                    </button>
                </Form>
            </CommentCard>
        </div>
    )
}

export default NewCommentForm;