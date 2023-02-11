import React from "react";
import Image from "next/image";
const Skill = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-6xl mx-auto dlex flex-col justify-center h-full">
        <h3 className="font-light text-purple-700 uppercase py-4">Skills</h3>
        <h2> Why Hire Me for Your Project?</h2>
        <p className="py-2 font-thin text-justify">
          I have a deep understanding of software development methodologies and
          practices, and I am always eager to learn new technologies and stay
          up-to-date with industry developments.I am a critical thinker who is
          able to identify and analyze various factors that can impact the
          success of a project. I understand the importance of delivering
          high-quality software and I am meticulous in my approach to coding and
          testing. I am committed to delivering solutions that are reliable,
          scalable, and maintainable. I am able to effectively communicate
          technical concepts to both technical and non-technical stakeholders,
          and I am always willing to listen to the perspectives and ideas of
          others. I have a genuine passion for software development, and I am
          always eager to take on new challenges and learn from my experiences.
        </p>


        <h2 className="py-8">
            What Can I DO.
        </h2>
          <div className="grid md:grid-cols-2 py-4 gap-16 ">
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image
                  src="/../public/assest/skills/html.png"
                  width="72"
                  height="72"></Image>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image
                  src="/../public/assest/skills/css.png"
                  width="72"
                  height="72"></Image>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image
                  src="/../public/assest/skills/tailwind.png"
                  width="72"
                  height="72"></Image>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind Css</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image
                  src="/../public/assest/skills/github1.png"
                  width="72"
                  height="72"></Image>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
            
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image
                  src="/../public/assest/skills/nextjs.png"
                  width="72"
                  height="72"></Image>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next.js</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image
                  src="/../public/assest/skills/aws.png"
                  width="72"
                  height="72"></Image>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          </div>
          
         
          


      </div>
    </div>
  );
};

export default Skill;
