import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import CommentList from './CommentList'
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import { createPath } from 'react-router-dom';

function CommentCard({songId, songs, setSongs, comments = [], setComments, comment = {}}) {
    const [likes, setLikes] = useState(comment.likes)
    console.log(comment.icon)
    const _ = require("lodash");



    const handleCommentDelete = (e) => {
        // const commentIndex = comments.findIndex(singleComment => singleComment.username === comment.username)
        // const updatedSongs = [...songs]
        if(comments.length === 1){
            comments.pop()
        }
        else{
            setComments(comments.filter(singleComment => !_.isEqual(comment,singleComment)))
        }
        fetch(`http://localhost:4000/songs/${songId}`,{
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({comments: comments})
        })
    }

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
        <Card bg="dark">
            <Card.Title>{comment.username}</Card.Title>
            <Image roundedCircle src={comment.icon} width="80" height="80"/>
            <Card.Body>
                <Card.Text>{comment.commentText}</Card.Text>
                <Button onClick={handleLikeIncrement}>Likes: {likes}</Button>
                <Button variant="danger" onClick={handleCommentDelete}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default CommentCard;