import React from 'react'
import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
      <div className="flex flex-col justify-center md:w-1/2"> 
      <h1 className=' text-white text-5xl font-hero-font'>Hi,<br/>
      My name is Charles Raja R<br/>
      <p className='text-2xl'>I am a Full stack developer</p> </h1>
       <div className='flex py-10'>
                <a href='#' className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
                <a href='#' className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href='#' className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
      </div>
      <div className="md:w-1/2">
        <img src={HeroImg}  />
      </div>
    </div>
  )
}

export default Hero
