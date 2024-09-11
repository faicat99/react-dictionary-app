import React, {useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
    const [keyWord, setKeyWord] = useState(true);

    function handleResponse(response) {
        console.log(response);
    }
        
    function search(event) {
        event.preventDefault();
        alert(`searching for ${keyWord} definition`);

        let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/tree";
        axios.get(apiUrl).then(handleResponse);
    }


    function handleKeywordChange(event) {
        setKeyWord(event.target.value);
    }


        return (
        <div className="Dictionary">
            <form onSubmit={search}>
               <input type="search"
               placeholder="What would you like to search?" 
               className="search-form-input"
               autoFocus={true}
               onChange={handleKeywordChange}
               />
               <input type="submit" value="Search" className="search-form-button" /> 
            </form>
        </div>
    )
}