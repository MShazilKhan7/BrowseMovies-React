import React from "react";
import OneTvMovieSection from "../components/oneTvMovie";


function FullTvMovieSection(props) {
    console.log(props)
    
    return (
        // three sections
        // Popular TV Shows
       
        // Top rated TV Shows

        props.information.map((dets, index)=>{
            return <OneTvMovieSection key={index} details={dets} categorySubHeading={props.headings[index]}/>
        })

        // Airing Today

    )
}
export default FullTvMovieSection;