import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {

  const [toggleMenu, setToggleMenu ] = useState(false)
  return (
    <header className='bg-primary'>

    <div className='flex justify-between px-5 py-3'>
      
    
    <h1>Charles Raja R</h1>
      <nav className='hidden md:block'>
         <ul className='flex justify-center '>
            <li className='px-3'>Home</li>
            <li className='px-3'>About</li>
            <li className='px-3'>Projects</li>
            <li className='px-3'>Contact</li>
        </ul>
      </nav>
      {
        toggleMenu && <nav className='block md:hidden'>
         <ul className='flex flex-col justify-center text-white mobile-nav'>
            <li className='px-3'><a href="#">Home</a></li>
            <li className='px-3'><a href="#">About</a></li>
            <li className='px-3'><a href="#">Projects</a></li>
            <li className='px-3'><a href="#">Contacts</a></li>
        </ul>
      </nav>
      }
        
      <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </div>
    </header>
  )
}

export default Header
