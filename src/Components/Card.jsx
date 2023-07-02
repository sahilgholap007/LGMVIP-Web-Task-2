import React from "react";

const Card = (props) => {
    return (
        <div className="card">
        <div className="card-body">
            <img src={props.avatar} alt="random" />
            <div className="details">
            <h4>Name:- {props.firstName} {props.lastName}</h4>
            <h4>Email:- {props.email}</h4>
            </div>
        </div>
        </div>
    );
};

export default Card;