import SongList from "./SongList.js";
import Search from "./Search.js"
function AllSongsGallery({songs}){
    return(
        <div>
            <SongList songs={songs}/>
            <Search />
        </div>
    );
}

export default AllSongsGallery;