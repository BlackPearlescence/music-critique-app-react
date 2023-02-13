import SongList from "./SongList.js";
import Search from "./Search.js"
import Form from "react-bootstrap/Form"
function AllSongsGallery({songs}){
    return(
        <div>  
            <Search songs={songs}/>
            <SongList songs={songs}/>
        </div>
    );
}

export default AllSongsGallery;