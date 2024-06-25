import React from 'react'
import pic from "../../public/profile.jpg"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";




function Home() {
  return (
    <>
    <div  name="Home" className=" max-w-screen-2xl container mx-auto px-4 md:px-20 mx-20 my-20">
      <div className='flex flex-col md:flex-row'>
        {/* left */}
        <div className='md:w-1/2 md:mt-24 mt-12 space-y-2 order-2 md:order-1'>
        <span className='text-xl'>Welcome to my Feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
        <h1>Hello, I'm a</h1>
        {/* <span className='text-red-700 font-bold'>Developer</span> */}
        <ReactTyped className='text-red-700 font-bold'
          strings={["Developer","Coder","Programmer"]}
          typeSpeed={30}
          backSpeed={40}
          loop={true}

        />
        </div>
        <br />
        <p className='text-sm md:text-md text-justify'>
          
        </p>
        <br />
      <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
          {/* socila media icons */}
          <div className='space-y-2'>
          <h1 className='font-bold '>Available on</h1>
          <ul className='flex space-x-5'>
          <li>
            <a href="https://www.linkedin.com/in/pushkarbastara0729">
            <FaLinkedin className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-2px '/>
            </a>
            </li>
          <li>
          <a href="https://github.com/pushkar6058">
          <FaGithub className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-2px'/>
          </a>
          </li>
          <li>
          <a href="https://x.com/BastaraPushkar">
          <FaSquareXTwitter className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-2px'/></a></li>
          <li><a href="https://www.geeksforgeeks.org/user/pushkarba60bn/">
          <SiGeeksforgeeks className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-2px'/></a></li>
          
          
          </ul>

        </div>

        {/* skills set */}

        <div className='space-y-2'>
        <h1 className='font-bold '>Currently working on : </h1>
          <div className='flex space-x-5'>
            <FaHtml5 className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2px'/>
            <RiTailwindCssFill className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2px'/>
            <IoLogoJavascript className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2px'/>
            <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2px'/>
          </div>
            



        </div>
      </div>


        </div>
        {/* right */}
      <div className='md:w-1/2 md:ml-14 md:mt-25 mt-8 mr-3   order-1'>
      <img src={pic} className='rounded-full md:w-[450px] md:h-[450px] h-[400px] w-[400px] ' alt="" />
      </div>
      </div>
      
    </div>
    <hr />
    </>
  )
}

export default Home