import React from 'react'
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import {
    AiOutlineMail,
    AiOutlineFacebook,
  } from "react-icons/ai"
  import {BsEmojiSmile} from 'react-icons/bs'

  
const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-6xl w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <p className='uppercase text-lg tracking-widest text-purple-500 py-4'>Let's Work Together</p>
            <div className='flex flex-auto items-center justify-center gap-x-4' >
            <h1>Hello, I'm <span className='text-purple-600 px-2'>Manisha</span>...!</h1>
            <h1 className='items-right rounded-full shadow-xl shadow-purple-400  hover:scale-150 '>
                 <BsEmojiSmile/> 
                </h1>
              </div>
            <h2>A Front-End Developer</h2>
            <p className='text-gray-500 py-6 '>
            "I design and code beautifully simple things and I love what I do"
            </p>

            <div className='flex max-w-5xl justify-center items-center py-12 gap-x-12 '>
                <div className='rounded-full shadow-md shadow-purple-400 p-3 cursor-pointer hover:scale-150 ease-in duration-300'>
                  <a href='https://www.linkedin.com/in/manisha-manandhar-894754161/' > <FaLinkedinIn/></a>
                </div>
                <div className='rounded-full shadow-md shadow-purple-400 p-3 cursor-pointer hover:scale-150 ease-in duration-300'>
                <a href='https://github.com/manisha-mdr' ><FaGithub/></a>
                </div>
                <div className='rounded-full shadow-md shadow-purple-400 p-3 cursor-pointer hover:scale-150 ease-in duration-300'>
                <a href='mailto:manishamanandhar0@gmail.com' > <AiOutlineMail/></a>
                </div>
                <div className='rounded-full shadow-md shadow-purple-400 p-3 cursor-pointer hover:scale-150 ease-in duration-300'>
                <a href='https://www.facebook.com/mane.saa.7' ><AiOutlineFacebook/></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
