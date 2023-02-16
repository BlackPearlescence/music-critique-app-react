import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import CommentList from './CommentList'
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

function CommentCard({comment}) {
    const [likes, setLikes] = useState(comment.likes)
    
    const handleLikeIncrement = (e) => {
        setLikes(likes + 1)
    }
    return (
        <Card>
            <Card.Title>{comment.username}</Card.Title>
            <Image roundedCircle={true} />
            <Card.Body>
                <Card.Text>{comment.commentText}</Card.Text>
                <Button onClick={handleLikeIncrement}>Likes: {likes}</Button>
            </Card.Body>
        </Card>
    )
}

export default CommentCard;