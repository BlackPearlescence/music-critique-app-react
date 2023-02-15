import React from 'react';
import CommentCard from './CommentCard';
import NewCommentForm from './NewCommentForm';

function CommentList() {

    return (
        <div className="commentList">
            <CommentCard />
            <NewCommentForm />
        </div>
    )
}

export default CommentList;