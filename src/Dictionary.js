import React, {useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
    const [keyWord, setKeyWord] = useState(true);
        
    function search(event) {
        event.preventDefault()
        alert(`searching for ${keyWord} definition`);
    }


    function handleKeywordChange(event) {
        setKeyWord(event.target.value);
    }


        return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <div className="row">
                    <div className="col-8">
               <input type="search"
               placeholder="What would you like to search?" 
               className="search-form-input"
               autoFocus={true}
               onChange={handleKeywordChange}
               />
               </div>
               <div className="col-4">
               <input type="submit" value="Search" className="search-form-button" /> 
               </div>
               </div>
            </form>
        </div>
    )
}