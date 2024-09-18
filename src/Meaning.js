import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
    return (
    <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>

        {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                    <p>
                    <strong>Definition:</strong>{definition.definition}
                    <br />
                    <Examples example={definition.example} />
                    <br />
                    <Synonyms synonyms={definition.synonyms} />
                    </p>
                </div>
            )
        })}
    </div>
    );
}