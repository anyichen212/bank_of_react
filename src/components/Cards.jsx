import React from "react";

const Cards = (props) => {
    const info = props.card;

    //console.log(props.card);
    //individual money infos
    return (
        <div className="card">
            <div><b>Amount :</b> ${info[0].toFixed(2)}</div>
            <div><b>Date :</b> {info[2]}</div>
            <div><b>Notes :</b> 
                <p>"{info[1]}"</p>
            </div>
        </div>

    );
};

export default Cards;