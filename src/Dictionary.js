import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleDictionaryResponse(response) {
         setResults(response.data[0]); 
    }

    function handlePexelsResponse(response) {
        console.log(response);
    }

    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse); 

        let pexelsApiKey = 
        "fNEMOSafDZFlQXZLLlRbI7ROHLa2HauX9ODdT32Q9quOx0JnijUlH9iO";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        axios
        .get(pexelsApiUrl, { 
            headers: {"Authorization" : `Bearer ${pexelsApiKey}` },})
        .then(handlePexelsResponse); 
    }


    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    function load() {
        setLoaded(true);
        search();
    }


    if (loaded) {
        return (
        <div className="Dictionary">
            <section>
                <h2>What do you want to look up?</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="search"
                        autoFocus={true}
                        onChange={handleKeywordChange}
                        defaultValue={props.defaultKeyword}/>
                    </form>
                        <div className="hint mt-1">Suggested words to search: book, music, forest, yoga, sunrise... </div>
            </section>
                <Results results={results} />
            </div>
        );
    } else {
        load();
        return "Loading...";
    }
}