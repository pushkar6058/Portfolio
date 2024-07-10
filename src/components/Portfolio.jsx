import React from 'react'
import { ReactTyped } from "react-typed";
import javascript from "../../public/javascript.png"
import reactjs from "../../public/reactjs.png"

function Portfolio() {
    const cardItems=[
      {
        id:1,
        logo:reactjs,
        name : "BookStoreApp",
        description:"app provides an intuitive interface for users to browse, search, and purchase books. I created dynamic components for book listings, reviews, and user profiles",
        gitlink:"https://github.com/pushkar6058/BookStore",
        liveLink:"/"
    },
    
    {
        id:2,
        logo:reactjs,
        name : "MyPortfolio",
        description:"I crafted my Personal Portfolio Website using React.js to showcase my skills, projects, and professional journey. The website features a clean layout with sections for my projects, skills, and contact information.",
        gitlink:"https://github.com/pushkar6058/Portfolio",
        liveLink:"https://667bcec9d506d3cd0e37e991--peaceful-meerkat-f6a96e.netlify.app/"
        

    }
       ,
    {
        id:3,
        logo:javascript,
        name : "Password-Generator",
        description:"it offers a seamless experience for users to create strong and unique passwords for their accounts, enhancing online security..",
        gitlink:"https://github.com/pushkar6058/Password-Generator",
        livelink:"/"

    } ,
    {
      id:4,
      logo:javascript,
      name:"Stone-paper-scissor-game",
      description:" Rock-Paper-Scissors game provides a fun and engaging way for users to pass the time, settle disputes, or make decisions without bias.",
      gitlink:"https://github.com/pushkar6058/Stone-paper-scissor-game",
      livelink:"/"
  }
    ]

  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <ReactTyped className='text-red-700 font-semibold underline'
          strings={["Featured Projects"]}
          typeSpeed={1}
          backSpeed={1}
          loop={true}
        />
{/* i will implement the live button soon */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-5'>
            {cardItems.map(({id,logo,name,gitlink,description}) => (
              <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg bg-gray-300 qshadow-lg cursor-pointer hover:scale-110 duration-300' key={id}>
                <img src={logo} className='w-[120px] h-[120px] rounded-full p-1 border-[2px]' alt="" />
                <div>
                  <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                  <p className='px-2 text-gray-500  '>{description}</p>
                </div>

               <div className=' px-6 py-4 space-x-3 justify-around' >
               <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>
                 <a href={gitlink}> GitHub</a>
                  </button>
                  
                  {/* <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>
                    <a href={liveLink}>Live Link</a>
                  </button> */}
               </div>
              </div>
            ))} 
        </div>
        </div>
    </div>
  )
}

export default Portfolio
