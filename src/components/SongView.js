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
        <Card bg="dark">
            <Card.Title>{songInfo.title}</Card.Title>
            <Card.Img src={songInfo.image}/>
            <Card.Body>
                <Card.Text>{songInfo.artist}</Card.Text>
                <Card.Text>{songInfo.album}</Card.Text>
                {toggleInfo ? 
                 <Button onClick={handleToggle}>Hide Details</Button>:
                 <Button onClick={handleToggle}>Click for Additional Details</Button>}
                {toggleInfo ? 
               <Card.Text>Genre: {typeof(songInfo.genre) === "object" ? songInfo.genre.map(genre => {
                if(genre === songInfo.genre[songInfo.genre.length - 1]){
                    return <span>{genre}</span>
                }
                else{
                    return <span>{genre}, </span>
                }
           }) : songInfo.genre}
                <Card.Text>{songInfo.length}</Card.Text>
                <Card.Text>{songInfo.year_released}</Card.Text>
                <Card.Text>{songInfo.description}</Card.Text>
                </Card.Text>
               : null}
               
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" onClick={handleUpvotes} name="upvotes">Upvote 👍: {songInfo.upvotes} </Button>
                <Button variant="danger" onClick={handleDownvotes}  name="downvotes">Downvote 👎: {songInfo.downvotes}</Button>
                <Button variant="success" onClick={handleBestSongSelection} name="bestsong">Make this your Song of the Day!</Button>
                <CommentList  songId={id} songInfo={songInfo} setSongInfo={setSongInfo} commentData={songInfo.comments}/>
            </Card.Footer>
        </Card>
    //     <div className="card" >
    //         <div className="content">
    //             <span className="header">
    //                 {/* <img {this is where the image for the songInfo/album will go}/> */}
    //                 <h1>{songInfoInfo.title}</h1>

    //                 <h3>{songInfoInfo.artist}</h3>
    //             </span>
    //             <div className="meta">
    //                 <span className="" >
    //                     <h3>{songInfoInfo.album}n</h3>
    //                 </span>
    //             </div>
    //             <div>
    //                 <button className="toggle" onClick={handleToggle}>
    //                     {toggleInfo ? 'Hide Details' :'Click for Additional Details' }</button>
    //                     {toggleInfo && (
    //         <div>
    //               <div className="description">
    //                 <p>songInfo GENRES</p>
    //                 <p>songInfo LENGTH</p>
    //                 <p>songInfo DESCRIPTION</p>
    //                 <p>songInfo YEAR RELEASED</p>
    //             </div>
    //             <div className="votes">
    //                 <p>songInfo UPVOTES</p>
    //                 <p>songInfo DOWNVOTES</p>
    //             </div>
    //             <div className="comments">
    //                 <CommentList  songInfoId={id} songInfos={songInfos} setsongInfos={setsongInfos} commentData={songInfoInfo.comments}/>
    //             </div>
    //         </div>
    //         )}
    //      </div>
    //     </div>
    // </div>
    )
}

export default SongView;