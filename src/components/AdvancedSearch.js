import Form from "react-bootstrap/Form"
import React, {useEffect, useState} from "react"
import Container from "react-bootstrap/Container"
import Button  from "react-bootstrap/Button";
import  InputGroup  from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap";
const inputTitleStyles = {
    "font-size" : "20px",
}
function AdvancedSearch({songs, filterQuery, setFilterQuery, sortQuery, setSortQuery}){

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

    const handleFilterChange = (e) => {
        setFilterQuery(e.target.value)
    }
    
    const handleSortChange = (e) => {
        setSortQuery(e.target.value)
    }

    return(
            <InputGroup>
                    <Row>
                        <Form.Label style={inputTitleStyles}>Genre Filter: </Form.Label>
                        <Form.Select aria-label="Choose a Genre"
                        onChange={handleFilterChange} 
                        value={filterQuery}>
                            {genres.map(genre => <option>{genre}</option>)}
                        </Form.Select>
                    </Row>
                    <Row>
                        <Form.Label style={inputTitleStyles}>Sort: </Form.Label>
                        <Col>
                            <Form.Check name="sort" value="title" type="radio" label="Song Title" onChange={handleSortChange}/>
                            <Form.Check name="sort" value="artist" type="radio" label="Artist Name" />
                        </Col>
                        <Col>
                            <Form.Check name="sort" value="year" type="radio" label="Year" />
                            <Form.Check name="sort" value="length" type="radio" label="Length" />
                        </Col>
                        <Col>
                            <Form.Check name="sort" value="upvotes" type="radio" label="Upvotes" />
                            <Form.Check name="sort" value="downvotes" type="radio" label="Downvotes" />
                        </Col>
                    </Row>
                </InputGroup>
            )
}

export default AdvancedSearch;