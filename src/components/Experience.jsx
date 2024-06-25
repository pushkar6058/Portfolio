import React from 'react'

import javascript from "../../public/javascript.png"
import reactjs from "../../public/reactjs.png"
import html from "../../public/html.png"
import mongodb from "../../public/mongodb.jpg"
import css from "../../public/css.jpg"
import c from "../../public/c-logo.png"


function Experience() {

    const cards=[
        {
            id:6,
            logo:c,
            name : "c++"
    
        },
        {
        id:1,
        logo:html,
        name:"HTML"
    },
    {
        id:2,
        logo:css,
        name : "CSS"

    },
    {
        id:3,
        logo:javascript,
        name : "JavaScript"

    },
    {
        id:4,
        logo:reactjs,
        name : "ReactJS"

    },
    {
        id:5,
        logo:mongodb,
        name : "MongoDB"

    }
    
    ]

  return (
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 my-16'>
        <div className='text-3xl font-bold mb-5'>Experience </div>
         
         <p className=''>I have worked with these technologies in my recent work experience.</p>
         <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3 '>
            {cards.map(({id,logo,name}) => (
              <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:width-[200px] md:height-[200px] cursor-pointer hover:scale-110 duration-300' key={id}>
                <img src={logo} 
                className='w-[150px] rounded-full ' 
                alt='' />
                <div >{name}</div>
                  

              
              </div>
            ))} 
        </div>

        
        </div>
  )
}

export default Experience