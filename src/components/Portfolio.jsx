import React from 'react'
import { ReactTyped } from "react-typed";
import javascript from "../../public/javascript.png"
import reactjs from "../../public/reactjs.png"

function Portfolio() {
    const cardItems=[
        {
        id:1,
        logo:javascript,
        name:"JavaScript"
    },
    {
        id:2,
        logo:reactjs,
        name : "ReactJS"

    }
    ]

  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <ReactTyped className='text-red-700 font-semibold underline'
          strings={["Featured Projects"]}
          typeSpeed={0}
          backSpeed={10}
          loop={true}
        />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-5'>
            {cardItems.map(({id,logo,name}) => (
              <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg cursor-pointer hover:scale-110 duration-300' key={id}>
                <img src={logo} className='w-[120px] h-[120px] rounded-full p-1 border-[2px]' alt="" />
                <div>
                  <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                  <p className='px-2 text-gray-500  '>Lorem ipsum dolor sit amet, consectetur </p>
                </div>

               <div className=' px-6 py-4 space-x-3 justify-around' >
               <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>
                  Video
                  </button>
                  
                  <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>
                    Source Code
                  </button>
               </div>
              </div>
            ))} 
        </div>
        </div>
    </div>
  )
}

export default Portfolio