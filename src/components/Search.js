import Form from "react-bootstrap/Form"
import React, {useState} from "react"
import Container from "react-bootstrap/Container"
import AdvancedSearch from "./AdvancedSearch.js"
import Button  from "react-bootstrap/Button";
import  InputGroup  from "react-bootstrap/InputGroup";
import { BsPatchPlusFill } from "react-icons/bs"
import { BsPatchMinusFill } from "react-icons/bs"
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap";
function Search({songs}){
    const [isAdvanced, setIsAdvanced] = useState(false)
    const handleAdvancedSearchClick = (e) => {
        setIsAdvanced(!isAdvanced)
    }
    const inputTitleStyles = {
            "font-size" : "20px",
    }

    return(
            <InputGroup>
                <Form.Control type="text" placeholder="Search..."/>
                {isAdvanced ? <Button onClick={handleAdvancedSearchClick }>Advanced Search <BsPatchPlusFill /></Button>:
                <Button onClick={handleAdvancedSearchClick}>Hide <BsPatchMinusFill/></Button>}
                <InputGroup>
                    <Row>
                        <Form.Label style={inputTitleStyles}>Genre Filter: </Form.Label>
                        <Form.Select aria-label="Choose a Genre">
                            <option>Hip-Hop</option>
                            <option>Rap</option>
                            <option>Electropop</option>
                            <option>R&B</option>
                            <option>Pop</option>
                            <option>Nigerian Alté</option>
                            <option>Grime</option>
                            <option>Eskibeat</option>
                        </Form.Select>
                    </Row>
                    <Row>
                        <Form.Label style={inputTitleStyles}>Sort: </Form.Label>
                        <Col>
                            <Form.Check type="radio" label="Song Title" />
                            <Form.Check type="radio" label="Artist Name" />
                        </Col>
                        <Col>
                            <Form.Check type="radio" label="Year" />
                            <Form.Check type="radio" label="Length" />
                        </Col>
                        <Col>
                            <Form.Check type="radio" label="Upvotes" />
                            <Form.Check type="radio" label="Downvotes" />
                        </Col>
                    </Row>
                </InputGroup>
            </InputGroup>
    );
}

export default Search;