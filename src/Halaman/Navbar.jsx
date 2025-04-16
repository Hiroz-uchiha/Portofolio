import React, { useState } from 'react'
import "../Assets/style.css"
import { Link } from 'react-scroll'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbar = ["Introduction", "About", "Skills", "Projects", "Contact"];

  return (
    <div className=' md:fixed right-0 md:w-full md:z-50 relative bg-darkbrown p-6 text-white flex flex-col font-[Comfortaa]'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl md:w-1/4 w-[90%]'>Portofolio</h1>

        <div className='md:hidden w-[10%] text-xl flex items-center justify-center'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='group'
          >
            <RxHamburgerMenu className='group-hover:text-red-400 transition-colors duration-300' />
          </button>
        </div>

        <div className='md:w-3/4 hidden md:flex md:justify-around'>
          {navbar.map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase()}
              className='underline-animated cursor-pointer'
              smooth={true}
              duration={500}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-darkbrown p-4 flex flex-col md:hidden text-center space-y-5 shadow-lg z-50 animate-fade-slide'>
          {navbar.map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-green-400 transition-colors duration-300'
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar;
