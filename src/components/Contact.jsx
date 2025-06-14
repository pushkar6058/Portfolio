import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import { ReactTyped } from 'react-typed';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = async(data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
           await axios.post("https://getform.io/f/lakmolxa",userInfo);
            toast.success("You message has been sent")
            toast.error("Something went wrong..")
        } catch (error) {
            console.log(error);
        }
      }
  return (
    
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-16'>
    <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
    <span>Please fill out the form below to contact me</span>
    <div className='flex flex-col items-center justify-center mt-5 '>

        <form onSubmit={handleSubmit(onSubmit)} 
        // action="https://getform.io/f/lakmolxa"
        // method='POST'
        className='bg-slate-300 w-96 px-8 py-6 rounded-xl'>
        <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>

    <div className='flex flex-col mb-4'> 
    <label htmlFor="" className='block text-gray-700'>FullName</label>
    <input {...register("name", { required: true })} type="text"
    className=' shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    id='name'
    name='name'
    type='text'
    placeholder='Enter your fullName' />
     {errors.name && <span className='text-red-500'>This field is required</span>}
    </div>

    <div className='flex flex-col mb-4'> 
    <label htmlFor="" className='block text-gray-700'>Email Address</label>
    <input {...register("email", { required: true })} type="text"
    className=' shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    id='email'
    name='email'
    type='text'
    placeholder='Email Address' />
     {errors.email && <span className='text-red-500'>This field is required</span>}
    </div>

    <div className='flex flex-col mb-4'> 
    <label htmlFor="" className='block text-gray-700'>Message</label>
    <textarea {...register("message", { required: true })} type="text"
    className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    id='message'
    name='message'
    type='text'
    placeholder='Type your message here...' />
     {errors.message && <span className='text-red-500'>This field is required</span>}
    </div>
    <button type="submit" className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
    </form>
    </div>
    </div>

    
  )
}

export default Contact
