import SongList from "./SongList.js";
import Search from "./Search.js"
import Form from "react-bootstrap/Form"
import React, {useEffect, useState} from "react"
function AllSongsGallery({songs}){
    const [searchQuery, setSearchQuery] = useState("")
    const [filterQuery, setFilterQuery] = useState ("All")
    const [sortQuery, setSortQuery] = useState("")
    
    // }, [songs])
    

    
    const searchedList = songs.filter(song => song.title.toLowerCase().match(searchQuery.toLowerCase()))
    // const filteredList = searchedList.filter(song => {
    //     song.genre.forEach(genre =>  {
    //         if(song.genre.find(genre)){
    //             return song;
    //         }
    //     });
    // })
    console.log(searchedList)
    // console.log(filteredList)
    return(
        <div>
            <Search songs={songs} 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterQuery={filterQuery}
            setFilterQuery={setFilterQuery}
            sortQuery={sortQuery}
            setSortQuery={setSortQuery}/>
            <SongList 
            songs={searchedList}/>
        </div>
    );
}

export default AllSongsGallery;