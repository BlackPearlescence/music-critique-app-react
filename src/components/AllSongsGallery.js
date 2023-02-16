import SongList from "./SongList.js";
import Search from "./Search.js"
import Form from "react-bootstrap/Form"
import React, {useEffect, useState} from "react"
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button"
import NewSongForm from "./NewSongForm.js";
import {v4 as uuidv4} from "uuid"
import { Badge, Container, Toast } from "react-bootstrap";
import ToggleButton  from "react-bootstrap/ToggleButton";
import Alert from "react-bootstrap/Alert"


function AllSongsGallery({songs = [], setSongs, genres,isDarkMode}){
    const [searchQuery, setSearchQuery] = useState("")
    const [filterQuery, setFilterQuery] = useState ("All")
    const [sortQuery, setSortQuery] = useState("Song Title")
    const [showForm, setShowForm] = useState(false);




        // console.log(songs)
        // // Obtain a list of genres to display in the Genre Filter Dropdown
        // songs.forEach(song => {
        //     song.genre.forEach(genre => {
        //         if(!genres.includes(genre)){
        //             setGenres([...genres, genre]);
        //         }
        //     })
        // })
        // // The first element in the dropdown must always be "All"
        // if(genres[0] != "All"){
        //     setGenres(["All", ...genres])
        // }

    // const genreList = [genres[0], ...genres.slice(1).sort((a,b) => a.localeCompare(b))]
    // console.log(genreList)
    console.log(genres)


    // Filter by text entered in search bar
    const searchedList = songs.filter(song => song.title.toLowerCase().match(searchQuery.toLowerCase()))

    // Filter by genre
    const filteredList = filterQuery === "All" ? searchedList : searchedList.filter(song => song.genre.includes(filterQuery))


    // const genreList = genres.map(genre => <ToggleButton onClick={handleGenreAdditionClick} key={uuidv4()} variant="info" >{genre}</ToggleButton>)
    // Sorting the Song Length is a little tricky because the length is in the form of a string (ex: "3:22")
    // const sortSongLength = () => {
    //     songs.sort((a,b) => {
    //         const a.split(" ")
    //     })
    // }

    useEffect(()=>{
        switch(sortQuery) {
            case "title":
                setSortQuery(songs.sort((a,b) => a.title.localeCompare(b.title)))
                break;
            case "artist":
                setSortQuery(songs.sort((a,b) => a.artist.localeCompare(b.artist)))
                break;
            case "year":
                setSortQuery(songs.sort((a,b) => parseInt(a.year_released) - parseInt(b.year_released)))
                break;
            case "length":
                setSortQuery(songs.sort((a,b) => {
                    const first = splitTimeString(a.length)
                    const second = splitTimeString(b.length)
                    console.log(first,second)

                    if(first.minutes != second.minutes){
                        return first.minutes - second.minutes
                    }
                    else{
                        return first.seconds - second.seconds
                    }
                }))
                break;
            case "upvotes":
                setSortQuery(songs.sort((a,b) => a.upvotes- b.upvotes))
                break;
            case "downvotes":
                setSortQuery(songs.sort((a,b)=> a.downvotes - b.downvotes))
                break;
            default:
                break;
        }
    }, [sortQuery])


    const handleShowNewSongForm = (e) => {
        setShowForm(true);
    }

    const splitTimeString =  (timeString) => {
        const splitTime = timeString.split(":");
        // [3,"55"]
        const minutes = parseInt(splitTime[0])
        const seconds = parseInt(splitTime[1])
        return {minutes: minutes, seconds: seconds}
    }

    return(
        <div class={isDarkMode ? 'App' : 'App.light'}>
            <Search songs={songs}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterQuery={filterQuery}
            setFilterQuery={setFilterQuery}
            sortQuery={sortQuery}
            setSortQuery={setSortQuery}
            //Sort list of genres in alphabetical order
            genres={genres}/>
            <section>
            <button className="button-newSong" onClick={handleShowNewSongForm}>Add a New Song!</button>
            </section>

            <NewSongForm
            showForm={showForm}
            setShowForm={setShowForm}
            genres={genres}
            songs={songs}
            setSongs={setSongs}
            // genres={genres.slice(1).sort((a,b) => a.localeCompare(b))}
            />
            <SongList
            songs={filteredList}
            setSongs={setSongs}/>
        </div>
    );
}

export default AllSongsGallery;
