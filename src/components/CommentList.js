import React from 'react';
import CommentCard from './CommentCard'
import NewCommentForm from './NewCommentForm'
import {v4} from "uuid";

function CommentList({songId, comments = []}) {

    return (
        <div className="commentList">
            {comments.map(comment => 
            <CommentCard 
            key={v4()}
            comment={comment}
            comments={comments}
            songId={songId}/>)}
            <NewCommentForm />
        </div>
    )
}

export default CommentList;