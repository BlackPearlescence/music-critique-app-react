import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import CommentList from './CommentList'
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

function CommentCard({songId, comments, comment = []}) {
    const [likes, setLikes] = useState(comment.likes)
    console.log(comment.icon)

    const handleLikeIncrement = (e) => {
        const commentIndex = comments.findIndex(singleComment => singleComment.username === comment.username)
        const updatedComment = {...comments[commentIndex], likes: likes + 1}
        const updatedComments = [...comments]
        console.log(updatedComments)
        updatedComments[commentIndex] = updatedComment
        setLikes(likes + 1)
        fetch(`http://localhost:4000/songs/${songId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                comments: updatedComments
            })
        })
    }
    return (
        <Card>
            <Card.Title>{comment.username}</Card.Title>
            <Image roundedCircle src={comment.icon} width="80" height="80"/>
            <Card.Body>
                <Card.Text>{comment.commentText}</Card.Text>
                <Button onClick={handleLikeIncrement}>Likes: {likes}</Button>
            </Card.Body>
        </Card>
    )
}

export default CommentCard;