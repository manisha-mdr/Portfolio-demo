import React from 'react'
import Image from "next/image";
const About = () => {
  return (
    <div className='w-full md:h-screen p-4 flex items-center py-6'>
      <div className='max-w-6xl m-auto md:grid grid-cols-3 gap-16 '>
        <div className='col-span-2 text-justify  gap-x-16'>
            <h3 className='font-light uppercase text-purple-700 py-4'>About</h3>
            <h2>Who I Am..!</h2>
            <p className='font-semi-bold py-2'> Hello! I'm Manisha Manandhar. Nice to meet you
                   Please look around.</p>
                   <p className='py-2 font-thin'>
                   I am a highly motivated and enthusiastic software developer with a passion for creating innovative solutions to complex problems.
                   I am looking for an exciting new challenge in a dynamic and fast-paced environment where I can continue to grow as a developer and make a meaningful impact
                   </p>
        </div>
        <div>
            <Image src='/../public/assest/images/pic.jpeg' width='320' height='240'  className='items-center justify-center'></Image>
        </div>
      </div>
    </div>
  )
}

export default About
