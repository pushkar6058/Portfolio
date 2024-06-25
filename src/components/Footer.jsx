import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";



function Footer() {
  return (
    <>
    <hr />
    <footer name="Footer" className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center'>
            <div className='flex space-x-4 '>

                <a className="hover:scale-150 duration-200" href="https://www.linkedin.com/in/pushkarbastara0729/">
                <TiSocialLinkedin size={24}/>
                </a>
                <a className="hover:scale-150 duration-200" href="https://twitter.com/BastaraPushkar">
                < FaSquareXTwitter size={24}/>
                </a>
                <a className="hover:scale-150 duration-200" href="https://www.instagram.com/pushkar__bastada/">
                <FaInstagramSquare size={24}/>
                </a>
            
            </div> 
            <div className='mt-8 border-top-gray-700 ot-8 flex flex-col items-center '>
                <p>&copy; 2024. All Rights reserved.</p>

            </div>
            </div>
        </div>
    </footer>
    </>
    
  )
}

export default Footer