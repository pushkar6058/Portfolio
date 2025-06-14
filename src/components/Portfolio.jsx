import React from 'react'
import { ReactTyped } from "react-typed";
import javascript from "../../public/javascript.png"
import reactjs from "../../public/reactjs.png"

function Portfolio() {
    const cardItems=[
      {
        id:1,
        logo:reactjs,
        name : "ManageYourDay",
        description:"Aimed at simplifying task management and enhancing productivity.",
        gitlink:"https://github.com/pushkar6058/todoApp",
        livelink:"https://sensational-granita-e92fcd.netlify.app/"
    },
      {
        id:2,
        logo:reactjs,
        name : "BookStoreApp",
        description:"app provides an intuitive interface for users to browse, search, review, and get books",
        gitlink:"https://github.com/pushkar6058/BookStore",
        livelink:"/"
    },
    
    {
        id:3,
        logo:reactjs,
        name : "MyPortfolio",
        description:"I crafted my Personal Portfolio Website using React.js to showcase my skills, projects, and journey.",
        gitlink:"https://github.com/pushkar6058/Portfolio",
        livelink:"https://em84vz81.netlify.app/"
        

    }
       ,
    {
        id:4,
        logo:javascript,
        name : "Password-Generator",
        description:"it offers a seamless experience for users to create strong and unique passwords for their accounts, enhancing online security..",
        gitlink:"https://github.com/pushkar6058/Password-Generator",
        livelink:"/"

    } ,
    {
      id:5,
      logo:javascript,
      name:"Stone-paper-scissor-game",
      description:"It provides a fun and engaging way for users to pass the time, settle disputes, or make decisions without bias.",
      gitlink:"https://github.com/pushkar6058/Stone-paper-scissor-game",
      livelink:"/"
  }
    ]

  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            
{/* i will implement the live button soon */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-8 py-5  '>
            {cardItems.map(({id,logo,name,gitlink,description,livelink}) => (
              <div className='md:w-[300px] md:h-[320px] border-[2px] rounded-lg bg-gray-300 shadow-lg cursor-pointer hover:scale-110 duration-300 ' key={id} >
                <img src={logo} className='w-[120px] h-[120px] rounded-full p-1 border-[2px]' alt="" />
                <div>
                  <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                  <p className='px-2 text-gray-500 text-sm  '>{description}</p>
                </div>

               <div className=' px-6 py-4 space-x-3 justify-around' >
               <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>
                 <a href={gitlink}> GitHub</a>
                  </button>
                  
                  {(livelink==="/")?"":<button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>

                   <a href={livelink}>Live</a>
                  </button>}
               </div>
              </div>
            ))} 
        </div>
        </div>
    </div>
  )
}

export default Portfolio
