import React from 'react';
import Card from "react-bootstrap/Card";
import CommentList from './CommentList'

function CommentCard() {

    return (
        <Card>
            <div className="content">
                <CommentList />
            </div>
        </Card>
    )
}

export default CommentCard;