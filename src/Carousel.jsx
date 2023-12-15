import React, { useEffect, useState } from 'react'
import {shortList,list,longList} from "./data";
import {FaQuoteRight} from 'react-icons/fa';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'


const Carousel = () => {
    const[people,setPeople]=useState(list);
    const [currentPerson,setCurrentPerson] = useState(0)
    useEffect(()=>{
      let sliderId = setInterval(()=>nextSlide(),2000)

      return ()=>clearInterval(sliderId)
    },[currentPerson])
    const prevSlide=()=>{
      setCurrentPerson((oldPerson)=>{
        const newPerson = (oldPerson -1 + people.length) % people.length;
        return newPerson
      })
    };
    const nextSlide=()=>{
      setCurrentPerson((oldPerson)=>{
        const newPerson = (oldPerson +1) % people.length;
        return newPerson
      })
    };

  return (
    <section className="slider-container">
        {people.map((person,personIndex)=>{
            const {id,name,image,title,quote}=person
            return <article className="slide " style={{transform:`translateX(${100 * (personIndex - currentPerson) }%)`,opacity:personIndex===currentPerson ? 1 : 0,visibility: personIndex === currentPerson ? "visible" : "hidden"}} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h5 className="name">{name}</h5>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
            </article>
        })}
        <button type="button" onClick={()=>prevSlide()} className="prev">{<FiChevronLeft/>}</button>
        <button type="button" onClick={()=>nextSlide()} className="next">{<FiChevronRight/>}</button>

    </section>
  )
}

export default Carousel