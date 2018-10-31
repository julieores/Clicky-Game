import React from 'react';
import './Card.css';



function Card(props){

    return(
       
       
        <div className="card"><h3>{props.name }</h3> <img src={props.img}></img></div>

    )
        
}


export default Card;