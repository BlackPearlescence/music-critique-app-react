import React from 'react';

function NewCommentForm() {
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
                    fluid label="Comment" 
                    placeholder="Comment" 
                    name="Comment"/>
                </Form.Group>
                <Form.Button>Submit Comment</Form.Button>
                </Form>
        </div>
    )
}

export default NewCommentForm;