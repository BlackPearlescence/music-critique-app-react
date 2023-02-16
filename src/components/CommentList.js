import React from 'react';
import CommentCard from './CommentCard'
import NewCommentForm from './NewCommentForm'
import {v4} from "uuid";

function CommentList({comments = []}) {

    return (
        <div className="commentList">
            {comments.map(comment => 
            <CommentCard 
            key={v4()}
            comment={comment}/>)}
            <NewCommentForm />
        </div>
    )
}

export default CommentList;