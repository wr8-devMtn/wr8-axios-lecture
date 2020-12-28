import React from 'react';

const Card = (props) => {
    return(
        <div className="card">
            <div>{props.name}</div>
            <img alt={props.name} src={props.img}/>
        </div>
    )
}

export default Card;