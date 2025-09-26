import React from "react";

export const Pizza = (props) => {
    const x = document.getElementById("blah");
    return (
        <div className="pizza">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export const Blah = () => <h1>Blah</h1>
