import React from "react";
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import {
    AiOutlineMail,
    AiOutlineFacebook,
  } from "react-icons/ai";
const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-5xl mx-auto px-2 py-16 w-full">
        <h3 className="font-light uppercase text-purple-700 py-4">
          Contact me
        </h3>
        <h2>Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-20">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-gray-500 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105"
                  src="https://i.pinimg.com/564x/f4/9a/a4/f49aa48d79c8cfddbd754a06a69bc710.jpg"></img>
              </div>
              <div className="pt-4">
                <h2>Manisha Manandhar</h2>
                <p className="font-thin">A Front-End Developer</p>
              </div>
              <div>
              <p className="pt-4">Connect With Me</p>
              <div className="flex items-center justify-between my-4 w-full  sm:w-[80%]">
              <div className="rounded-full shadow-md shadow-purple-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                  <a href='https://www.linkedin.com/in/manisha-manandhar-894754161/' > <FaLinkedinIn/></a>
                  </div>
                  <div className="rounded-full shadow-md shadow-purple-400 p-3 cursor-pointer  hover:scale-125 ease-in duration-300">
                  <a href='https://github.com/manisha-mdr' ><FaGithub/></a>
                  </div>
                  <div className="rounded-full shadow-md shadow-purple-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                  <a href='mailto:manishamanandhar0@gmail.com' > <AiOutlineMail/></a>
                  </div>
                  <div className="rounded-full shadow-md shadow-purple-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                  <a href='https://www.facebook.com/mane.saa.7' ><AiOutlineFacebook/></a>
                  </div>
              </div>
              </div>
            </div>
          </div>
          {/*right */}
          <div className="col-span-3 w-full h-[90%] shadow-xl shadow-black rounded-xl lg:p-4">
            <div className="p-4">
                <form>
                    <div className="grid grid-cols-2 gap-4 w-full py-2">
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">
                                Name
                            </label>
                          <input className="border-2 rounder-lg p-3 flex border-purple-200" type='text'/>
                        </div>
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">
                               Phone number
                            </label>
                          <input className="border-2 rounder-lg p-3 flex border-purple-200" type='text'/>
                        </div>
                    </div>
                 
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">
                               email
                            </label>
                          <input className="border-2 rounder-lg p-3 flex border-purple-200" type='text'/>
                        </div>
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">
                              subject
                            </label>
                          <input className="border-2 rounder-lg p-3 flex border-purple-200" type='email'/>
                        </div>

                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">
                              message
                            </label>
                          <textarea className="border-2 rounded-lg p-3 border-purple-200" rows='7'></textarea>
                        </div>
                        <button className="w-[40%] text-white mt-12">Send</button>
                </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
