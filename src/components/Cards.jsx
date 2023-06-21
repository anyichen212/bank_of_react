import React from "react";

const Cards = (props) => {
    const info = props.card;

    //console.log(props.card);
    //individual gifs
    return (
        <div className="card">
            <div>${info[0].toFixed(2)}</div>
            <div>{info[2]}</div>
            <div>"{info[1]}"</div>
        </div>

    );
};

export default Cards;