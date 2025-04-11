import React from 'react'
import "../Assets/style.css"

const Navbar = () => {
    const navbar = [
        "Home", "About", "Skills", "Projects", "Contact"
    ]
  return (
    <div className=' bg-darkbrown p-6 text-white flex font-[Comfortaa]'>
        <div className=' w-1/4'>
            <h1 className=' text-2xl'>Portofolio</h1>
        </div>
        <div className=' w-3/4 flex justify-around'>
            {navbar.map((item, index) => (
                <a key={index} href={`#${item.toLowerCase()}`} className=' underline-animated  cursor-pointer'>{item}</a>
            ))}
        </div>

    </div>
  )
}

export default Navbar
