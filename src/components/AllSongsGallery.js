import SongList from "./SongList.js";
import Search from "./Search.js"
import Form from "react-bootstrap/Form"
import React, {useEffect, useState} from "react"
function AllSongsGallery({songs}){
    const [searchQuery, setSearchQuery] = useState("")
    const [filterQuery, setFilterQuery] = useState ("All")
    const [sortQuery, setSortQuery] = useState("Song Title")
    
    // }, [songs])
    
    const [genres, setGenres] = useState([])

    // Obtain a list of genres to display in the Genre Filter Dropdown
    songs.forEach(song => {
        song.genre.forEach(genre => {
            if(!genres.includes(genre)){
                setGenres([...genres, genre]);
            }
        })
    })
    // The first element in the dropdown must always be "All"
    if(genres[0] != "All"){
        setGenres(["All", ...genres])
    } 
    
    // Filter by text entered in search bar
    const searchedList = songs.filter(song => song.title.toLowerCase().match(searchQuery.toLowerCase()))

    // Filter by genre
    const filteredList = filterQuery === "All" ? searchedList : searchedList.filter(song => song.genre.includes(filterQuery))

    // Sorting the Song Length is a little tricky because the length is in the form of a string (ex: "3:22")
    // const sortSongLength = () => {
    //     songs.sort((a,b) => {
    //         const a.split(" ")
    //     })
    }

    switch(sortQuery) {
        case "Song Title":
            break;
        case "Artist Name":
            break;
        case "Year":
            break;
        case "Length":
            break;
        case "Upvotes":
            break;
        case "Downvotes":
            break;
    }

    return(
        <div>
            <Search songs={songs} 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterQuery={filterQuery}
            setFilterQuery={setFilterQuery}
            sortQuery={sortQuery}
            setSortQuery={setSortQuery}
            //Sort list of genres in alphabetical order
            genres={[genres[0], ...genres.slice(1).sort((a,b) => a.localeCompare(b))]}/>
            <SongList 
            songs={filteredList}/>
        </div>
    );


export default AllSongsGallery;