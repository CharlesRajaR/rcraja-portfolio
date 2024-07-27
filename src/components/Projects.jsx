import React from 'react'
import websiteImg1 from '../assets/ecommerce-websites.jpg'
import websiteImg2 from '../assets/website-blog.jpg'

const Projects = () => {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'Food-Ordering Ecommerce website like Swiggy, Built with SpringBoot & React.',
                links:[ 'https://github.com/CharlesRajaR/Food-Ordering-Website-Frontend',
                      'https://github.com/CharlesRajaR/Food_Ordering_Website_Backend']
                
            },
            {
                image: websiteImg2,
                description: 'Ecommerce Mobile Store built with react',
                links: ['https://github.com/CharlesRajaR/Mobile_Store_React']
            }
        ]
    }
    return (
    <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with Java, SpringBoot, React, MySQL and TailwindCSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => {return(
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                {project.links.map((link,index)=><a className='btn' target='_blank' href={link}>{`Link${index+1}`}</a>)}
                                
                            </div>
                        </div>
                    </div>)
 } )}
               
               
            </div>
        </div>
    </section>

  )
}

export default Projects
