import React from 'react'
import "../Assets/style.css"
import { Link } from 'react-scroll'

const Navbar = () => {
    const navbar = [
         "About", "Skills", "Projects", "Contact"
    ]
  return (
    <div className=' bg-darkbrown p-6 text-white flex font-[Comfortaa]'>
        <div className=' w-1/4'>
            <h1 className=' text-2xl'>Portofolio</h1>
        </div>
        <div className=' w-3/4 flex justify-around'>
            {navbar.map((item, index) => (
                <Link 
                key={index} to={item.toLowerCase()} 
                className=' underline-animated  cursor-pointer'
                smooth={true}
                duration={500}
                >{item}</Link>
            ))}
        </div>

    </div>
  )
}

export default Navbar
