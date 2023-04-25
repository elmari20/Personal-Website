import Image from 'next/image'
import React from 'react'
import { Envelope, Twitter, Linkedin, Instagram } from "./icons";

 
const Sidebar = ({data}) => {
  const { name, role, education , contactLinks } = data
  return (
    <div className='bg-black flex flex-col content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed'>
        <div className='text-white flex flex-col w-full p-10 items-center'>
            <Image
              priority
              width={300}
              height={300}
              className='rounded-full h-full mb-6 transition-all duration-300 ease-in-out transform hover:scale-105'
              src='/images/ElmarCropped.jpg'
              alt='Elmar'
            />
            <h1 className='mb-2 text-center'>{name}</h1>
            <h2 className='mb-8'>{role}</h2>
            <div className='flex flex-col justify-center items-center text-center'>
              {education.map((el, i) => (
                <p key={i} className='mb-2 '>{el}</p>
              ))}
            </div>
            <div className='text-white text-center mb-4 mt-4 sm:mt-8'>
                <h3 className='mb-2 text-yellow'>CONTACT ME</h3>
                <div className='flex flex-row justify-center gap-2'>
                  <a className="icons-contactme" href={contactLinks?.[0]} aria-label={"email link"}><Envelope/></a>
                  <a className="icons-contactme" href={contactLinks?.[1]} aria-label={"twitter link"}><Twitter/></a>
                  <a className="icons-contactme" href={contactLinks?.[2]} aria-label={"linkedin link"}><Linkedin/></a> 
                  <a className="icons-contactme" href={contactLinks?.[3]} aria-label={"instagram link"}><Instagram/></a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar