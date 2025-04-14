import React, { useState } from 'react'
import "../Assets/style.css"
import { Link } from 'react-scroll'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbar = ["Introduction","About", "Skills", "Projects", "Contact"];

  return (
    <div className='fixed z-[999] bg-darkbrown p-6 text-white flex font-[Comfortaa] container'>
      <div className='md:w-1/4 w-[90%]'>
        <h1 className='text-2xl'>Portofolio</h1>
      </div>

      {/* Hamburger Button */}
      <div className='md:hidden w-[10%] text-xl flex items-center justify-center'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='group'
        >
          <RxHamburgerMenu className='group-hover:text-red-400 transition-colors duration-300' />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className='md:w-3/4 flex md:justify-around'>
        {navbar.map((item, index) => (
          <Link
            key={index}
            to={item.toLowerCase()}
            className='underline-animated cursor-pointer hidden md:block'
            smooth={true}
            duration={500}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-darkbrown p-4 flex flex-col md:hidden z-[999] text-center space-y-5'>
          {navbar.map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className='cursor-pointer hover:text-green-400 transition-colors duration-300'
              onClick={() => setIsOpen(false)} // auto close if needed
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
