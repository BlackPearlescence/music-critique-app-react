import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import {useParams} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

function SongView({bestSong, setBestSong}) {
    const [toggleInfo, setToggleInfo] = useState(false)
    const [songInfo, setSongInfo] = useState({})
    const {id} = useParams();

    function handleToggle(event) {
        setToggleInfo(prev => !prev)
    }

    useEffect(()=>{
        fetch(`http://localhost:4000/songs/${id}`)
            .then((res) => (res.json()))
            .then((songInfoData) => setSongInfo(songInfoData))
    }, [id])

    const handleUpvotes = (e) => {
        patchVotes({upvotes: songInfo.upvotes + 1})
        setSongInfo({...songInfo, upvotes: parseInt(songInfo.upvotes) + 1})

    }

    const handleDownvotes = (e) => {
        patchVotes({downvotes: songInfo.downvotes + 1})
        setSongInfo({...songInfo, downvotes: parseInt(songInfo.downvotes) + 1})

    }

    const patchVotes = (voteType) => {
        fetch(`http://localhost:4000/songs/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(voteType)
        })
    }

    const handleBestSongSelection = (e) => {
        setBestSong(songInfo)
        console.log(bestSong)
    }
    return (
        <section>
            <h2>{songInfo.title}</h2>
            <div className="project-image">
            <img src={songInfo.image}  alt={songInfo.name} />
            </div>

            <div className="details">
                <h2>{songInfo.artist}</h2>
                <p>{songInfo.album}</p>
                {toggleInfo ?
                 <button onClick={handleToggle}>Hide Details</button>:
                 <button onClick={handleToggle}>Click for Additional Details</button>}
                {toggleInfo ?
               <p>Genre: {typeof(songInfo.genre) === "object" ? songInfo.genre.map(genre => {
                if(genre === songInfo.genre[songInfo.genre.length - 1]){
                    return <span>{genre}</span>
                }
                else{
                    return <span>{genre}, </span>
                }
           }) : songInfo.genre}
                <p>{songInfo.length}</p>
                <p>{songInfo.year_released}</p>
                <pt>{songInfo.description}</pt>
                </p>
               : null}

            </div>
            <div className="details">
                <button variant="primary" onClick={handleUpvotes} name="upvotes">Upvote 👍: {songInfo.upvotes} </button>
                <button variant="danger" onClick={handleDownvotes}  name="downvotes">Downvote 👎: {songInfo.downvotes}</button>
                <button variant="success" onClick={handleBestSongSelection} name="bestsong">Make this your Song of the Day!</button>
                <CommentList  songId={id} songInfo={songInfo} setSongInfo={setSongInfo} commentData={songInfo.comments}/>
            </div>
        </section>

    )
}

export default SongView;
