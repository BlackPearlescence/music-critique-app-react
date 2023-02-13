import React from 'react';
import { Card } from "semantic-ui-react";

function CommentCard() {

    return (
        <Card>
            <div className="content">
                <div className="header">{Comments}</div>
            </div>
        </Card>
    )
}

export default CommentCard;