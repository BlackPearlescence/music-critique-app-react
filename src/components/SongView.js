import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import {useParams} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import {Pie} from  "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"



function SongView({bestSong, setBestSong}) {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const [toggleInfo, setToggleInfo] = useState(false)
    const [songInfo, setSongInfo] = useState({})
    const {id} = useParams();

    function handleToggle(event) {
        setToggleInfo(prev => !prev)
    }

    useEffect(()=>{
        const handleGetSongInfo = async () => {
            const data = await fetch(`http://localhost:4000/songs/${id}`);
            const json = await data.json()
            setSongInfo(json)

        }
        handleGetSongInfo()
        // fetch(`http://localhost:4000/songs/${id}`)
        //     .then((res) => (res.json()))
        //     .then((songInfoData) => setSongInfo(songInfoData))
    }, [])

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

            <div>
                 {songInfo ? <Pie  data={{
        labels: ["Downvotes","Upvotes"],
        datasets: [
            {
                label: "Vote Distribution",
                data: [songInfo.downvotes,songInfo.upvotes],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
            }
        ],
        data: [10, 20],
    } }/> : null}
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
