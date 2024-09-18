import React from "react";

export default function Examples(props) {
    if (props.examples) {
        <div className="Examples">
            {props.examples.map(function(example, index) {
                return <span key={index}>{example}</span>;
            })}
        </div>
    } else {
        return null;
    }
}