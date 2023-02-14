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
function Search({songs, searchQuery, setSearchQuery, filterQuery, setFilterQuery, sortQuery, setSortQuery, genres}){
    const [isAdvanced, setIsAdvanced] = useState(false)
    
    const handleAdvancedSearchClick = (e) => {
        setIsAdvanced(!isAdvanced)
    }
    
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return(
            <InputGroup>
                <Form.Control type="text" placeholder="Search..." onChange={handleSearchChange} value={searchQuery}/>
                {isAdvanced ?
                <Button onClick={handleAdvancedSearchClick}>Hide <BsPatchMinusFill/></Button>:
                <Button onClick={handleAdvancedSearchClick }>Advanced Search <BsPatchPlusFill /></Button>}
                {isAdvanced ? <AdvancedSearch
                filterQuery={filterQuery}
                setFilterQuery={setFilterQuery}
                sortQuery={sortQuery}
                setSortQuery={setSortQuery}
                songs={songs}
                genres={genres}/> : null}
            </InputGroup>
    );
}

export default Search;