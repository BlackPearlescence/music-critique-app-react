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
function AdvancedSearch({songs, filterQuery, setFilterQuery, sortQuery, setSortQuery, genres}){

    

    const handleFilterChange = (e) => {
        setFilterQuery(e.target.value)
        console.log(e.target.value)
    }
    
    const handleSortChange = (e) => {
        setSortQuery(e.target.value)
        console.log(e.target.value)
    }

    return(
            <InputGroup>
                    <Row>
                        <Form.Label style={inputTitleStyles}>Genre Filter: </Form.Label>
                        <Form.Select aria-label="Choose a Genre"
                        onChange={handleFilterChange} 
                        value={filterQuery}>
                            {genres.map(genre => <option>{genre.genre}</option>)}
                        </Form.Select>
                    </Row>
                    <Row>
                        <Form.Label style={inputTitleStyles}>Sort: </Form.Label>
                        <Col>
                            <Form.Check name="sort" value="title" type="radio" label="Song Title" onChange={handleSortChange}/>
                            <Form.Check name="sort" value="artist" type="radio" label="Artist Name" onChange={handleSortChange}/>
                        </Col>
                        <Col>
                            <Form.Check name="sort" value="year" type="radio" label="Year" onChange={handleSortChange} />
                            <Form.Check name="sort" value="length" type="radio" label="Length" onChange={handleSortChange}/>
                        </Col>
                        <Col>
                            <Form.Check name="sort" value="upvotes" type="radio" label="Upvotes" onChange={handleSortChange} />
                            <Form.Check name="sort" value="downvotes" type="radio" label="Downvotes" onChange={handleSortChange}/>
                        </Col>
                    </Row>
                </InputGroup>
            )
}

export default AdvancedSearch;