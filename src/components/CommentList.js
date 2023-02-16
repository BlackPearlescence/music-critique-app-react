import React, { useState } from 'react';
import CommentCard from './CommentCard'
import NewCommentForm from './NewCommentForm'
import {v4} from "uuid";

function CommentList({songId, songs, setSongs, commentData = []}) {

    const [comments, setComments] = useState(commentData);
    return (
        <div className="commentList">
            {comments.map(comment => 
            <CommentCard 
            key={comment.id}
            comment={comment}
            comments={comments}
            setComments={setComments}
            songs={songs}
            setSongs={setSongs}
            songId={songId}/>)}
            <NewCommentForm
            songs={songs}
            setSongs={setSongs}
            comments={comments}
            setComments={setComments}
            songId={songId}/>
        </div>
    )
}

export default CommentList;