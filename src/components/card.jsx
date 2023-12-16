import React from "react";
import { Link } from "react-router-dom";
import { FaSave,FaUserFriends  } from "react-icons/fa";

function Card(props) {
    console.log("props: " ,props);
    return(
        <div class="card">
            <div class="image-container">
                <img src={props.details.path} alt=""></img>
            </div>
            <div class="card-details">
                <h4>{props.details.title}</h4>
                <div class="icons">
                    <Link><FaUserFriends /></Link>
                    <Link><FaSave /></Link> 
                </div>
            </div>
        </div>
    )
    
}

export default Card;