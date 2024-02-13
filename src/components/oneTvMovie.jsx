import React from "react";
import Card from "./card";

// An array of objects will be passed to this component. 
function OneTvMovieSection(details) {
    console.log(details)
    let counter = 0;
    return(
        <div className="popular-TV-section">
            <h3 key={counter++} className="heading">{details.categorySubHeading}</h3>
            <div className="shows">
                {details.details.map((item1,index)=>{
                    return <Card details={details.details[index]}/>
                })}
            </div>
        </div>
    )
}

export default OneTvMovieSection;