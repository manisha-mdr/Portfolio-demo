import React from 'react'
import Image from "next/image"
import propertyImg from '../public/assest/cpm.png'
import calculator from '../public/assest/calc.png'

const Project = () => {
  return (
    <div className='w-full'>
        <div className='max-w-6xl mx-auto px-2 py-24'>
            <h3 className='font-light tracking-widest uppercase text-purple-700 py-4'>Projects</h3>
            <h2>My Works</h2>
            <div className='grid md:grid-cols-2 gap-16 py-12'>
                <div className='relative flex items-center justify-center h-auto hover:scale-110  w-full shadow-xl shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-purple-500'>
                    <Image src={propertyImg} >
                    </Image>
                </div>
                <div className='relative flex items-center justify-center h-auto hover:scale-110  w-full shadow-xl shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-purple-500'>
                    <Image src={calculator} >
                    </Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project
