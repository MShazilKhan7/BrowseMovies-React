import React from "react"
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const CarouselDetails =  [
    {
        path: '/assets/carousel/image (1).webp' ,
        title: 'Tomorrow is Ours',
        time: 'Mon, Jul 17, 2017',
        description: "The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals"
    },
    {
        path: '/assets/carousel/image (10).webp' ,
        title: 'Talk to Me',
        time: 'Wed, Jul 26, 2023',
        description: "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces"
    },
    {
        path: '/assets/carousel/image (13).webp' ,
        title: 'Freelance',
        time: 'Thu, Oct 5, 2023',
        description: "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive."
    },


    {
        path: '/assets/carousel/image (15).webp' ,
        title: 'Killers of the Flower Moon',
        time: 'Wed, Oct 18, 2023',
        description: "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery."
    },
    {
        path: '/assets/carousel/image (8).webp' ,
        title: 'Family Switch',
        time: 'Thu, Nov 30, 2023',
        description: "When the Walker family members switch bodies with each other during a rare planetary alignment, their hilarious journey to find their way back to normal will bring them closer together than they ever thought possible."
    },
    {
        path: '/assets/carousel/image (9).webp' ,
        title: 'Saw X',
        time: 'Tue, Sep 26, 2023',
        description: "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps."
    },

]


function Carousel(){
  const [counter, setCounter] = useState(0);
  
  const shiftSlide = ()=>{
    const slides  = document.querySelectorAll('.slide')
    slides.forEach((sl,index)=>{
        sl.style.transform = `translateX(-${counter*100}%)`
    })
     
}
  
  const goPrev = () => {
    setCounter((prevCounter) => (prevCounter === 0 ? CarouselDetails.length - 1 : prevCounter - 1));
    shiftSlide();
  };

  const goNext = () => {
    setCounter((prevCounter) => (prevCounter === CarouselDetails.length - 1 ? 0 : prevCounter + 1));
    shiftSlide();
  };

  return(
        
        <div className="carousel">
            <div className="carousel-images">
                {CarouselDetails.map((slide,index)=>{
                return (<div key={index} style={{left: `${index*100}%`}} className="slide">
                    <img src={slide.path} alt=""></img>
                    <div className="overlay">
                        <div>
                            <h3>{slide.title}</h3>
                            <time>{slide.time}</time>
                            <p className="description">{slide.description}</p>
                        </div>
                        <button onClick={goPrev} className="left"><FaChevronLeft /></button>
                        <button onClick={goNext} className="right"><FaChevronRight /></button>
                    </div>
                </div>)
                })}
                
            </div>
        </div>
       
          
    )
}

export default Carousel;