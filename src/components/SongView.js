import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import {useParams} from "react-router-dom";
import { useHistory } from 'react-router-dom';

function SongView() {
    const [toggleInfo, setToggleInfo] = useState(true)
    const [songInfo, setSongInfo] = useState({})
    const {id} = useParams();

    function handleToggle(event) {
        setToggleInfo(prev => !prev)
    }

    useEffect(()=>{
        fetch(`http://localhost:4000/songs/${id}`)
            .then((res) => (res.json()))
            .then((songData) => setSongInfo(songData))
    }, [id])


    return (
        <div className="card" >
            <div className="content">
                <span className="header">
                    {/* <img {this is where the image for the song/album will go}/> */}
                    <h1>{songInfo.title}</h1>

                    <h3>{songInfo.artist}</h3>
                </span>
                <div className="meta">
                    <span className="" >
                        <h3>{songInfo.album}n</h3>
                    </span>
                </div>
                <div>
                    <button className="toggle" onClick={handleToggle}>
                        {toggleInfo ? 'Hide Details' :'Click for Additional Details' }</button>
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
                    <CommentList  songId={id} comments={songInfo.comments}/>
                </div>
            </div>
            )}
         </div>
        </div>
    </div>
    )
}

export default SongView;