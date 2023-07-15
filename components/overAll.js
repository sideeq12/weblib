import React from 'react'
import Card from './cards'
import firstcard from "./lap.svg"
import secondCard from "./top.svg"
import dsa from "./dsa.svg"


const Cards = () => {
    const data = [{

        image : dsa,
        headline : "Data structure and algorithm",
        key : 1, 
        message : "Enhance your problem-solving skills with our resources on algorithms and data structures. Learn how to optimize code efficiency, implement sorting and searching algorithms, and design scalable data structures. Master the building blocks of efficient programming.", 
    },{
        image : firstcard,
        headline : "Web Development",
        key : 2, 
        message : "Master the art of creating websites and web applications with our comprehensive web development resources. Discover books on HTML, CSS, and JavaScript, and explore frameworks like React, Angular, and Django. From front-end design to back-end development, we have you covered.", 
    }, {

        image : secondCard,
        headline : "Software engineering",
        key : 3, 
        message : "Dive into the world of software engineering with our resources on software development methodologies, project management, and quality assurance. Learn how to collaborate effectively in teams, write clean code, and deliver robust and reliable software solutions.", 
    }]
  return (
    <div className='mx-5 md:mx-20 bg-white border-t-2  
    flex flex-col md:flex-row h-fit py-10 md:py-40 align-middle justify-center'>
        {data.map(info => <Card key={info.key} message={info.message} 
        headline={info.headline} 
        image={info.image}/>)}
    </div>
  )
}

export default Cards;