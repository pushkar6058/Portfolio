import React, { useEffect } from 'react'
import { useState } from 'react';
import pic from "../../public/profilephoto.jpg"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import {Link} from "react-scroll"


function Navbar() {



    const [sticky, setSticky] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const [menu,setMenu]=useState(false);
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contact"
        },
        
    ]


  return (
    <>
    <div name="Navbar" className=" max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 bg-white">
        <div className='flex justify-between items-center'>
            <div className='flex  space-x-2'>
                <img src={pic}  className="h-12 w-12 border-1 border-black rounded-full" alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>Pushk
                    <span className='text-blue-500'>ar</span>
                <p className='text-sm'><Link onClick={()=>setMenu(!menu)}
                        to={'Home'}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'>{'Frontend Developer'}</Link></p>
                </h1>
            </div>
        {/* desktop navbar   */}
        <div>
            <ul className='hidden md:flex space-x-8'>
               { navItems.map(({id,text})=> (
                    <li className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                      key={id}>
                        <Link to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'>{text}</Link>
                        </li>
                ))}
            </ul>

            <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                {menu?<IoClose className='hover:scale-110' size={24} /> : <IoMenu className='hover:scale-110' size={24}/>
                }
            </div>
        </div>
        </div>
{/* mobile navbar */}

                {menu && (
                   <div className='bg-white'>
            <ul  className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
            
                { navItems.map(({id,text})=> (
                    <li className="hover:scale-110 duration-200 cursor-pointer  font-semibold"
                     key={id}>
                        <Link onClick={()=>setMenu(!menu)}
                        to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'>{text}</Link>
                        </li>
                ))}

            </ul>
        </div> 
                )}
        
    </div>
    </>
  )
}

export default Navbar
