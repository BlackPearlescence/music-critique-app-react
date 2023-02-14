import React from 'react';
import Form from 'react-bootstrap/Form'
import CommentCard from './CommentCard'
import CommentList from './CommentList'
import { MDBTypography, MDBBtn } from 'mdb-react-ui-kit';

function NewCommentForm({setComments}) {

    function handleClick(event) {  

        function handleSubmit(event) {
            event.preventDefault();

            const newComment = document.querySelector('#comment').value
        }

        fetch(`http://localhost:4000/songs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(response => response.json())

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
                            <MDBTypography tag="h5">Add a Comment</MDBTypography>
                        </div>
                    </Form.Group>
                    <MDBBtn onClick={handleClick}>
                    Send <MDBIcon fas icon="long-arrow-alt-right ms-1" />
                    </MDBBtn>
                </Form>
            </CommentCard>
        </div>
    )
}

export default NewCommentForm;