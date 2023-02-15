import React, { useState } from 'react';
import CommentList from './CommentList'

function SongView() {

    const [toggleInfo, setToggleInfo] = useState(true)

    function handleToggle(event) {
        setToggleInfo(prev => !prev)
    }

    return (
        <div className="card" >
            <div className="content">
                <span className="header">
                    {/* <img {this is where the image for the song/album will go}/> */}
                    <h1>SONG TITLE</h1>
                    <h3>SONG ARTIST</h3>
                </span>
                <div className="meta">
                    <span className="" >
                        <h3>SONG ALBUM</h3>
                    </span>
                </div>
                <div>
                    <button className="toggle" onClick={handleToggle}>
                        {toggleInfo ? 'Click for Additional Details' : 'Hide Details'}</button>
                        {toggleInfo && (
            <div>
                  <div className="description">
                    <p>SONG GENRES</p>
                    <p>SONG LENGTH</p>
                    <p>SONG DESCRIPTION</p>
                    <p>SONG YEAR RELEASED</p>
                </div>
                <div className="votes">
                    <p>SONG UPVOTES</p>
                    <p>SONG DOWNVOTES</p>
                </div>
                <div className="comments">
                    <CommentList />
                </div>
            </div>
            )}
         </div>
        </div>
    </div>
    )
}

export default SongView;