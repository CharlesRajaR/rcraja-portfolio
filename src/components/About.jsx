import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {

        const config  = {
        line1: 'Hi, My name is Charles Raja R. I am a Full stack web developer. I built a full stack Websites with SpringBoot, MySQL, React.js , Redux, Axios, Tailwind CSS ',
        line3: 'In Frontend I know React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.',
        line2: 'I am proficient in Backend Technologies like Spring Boot framework in Java, MySQL database and MongoDB'
    }
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
  )
}

export default About
