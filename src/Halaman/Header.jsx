import React from 'react'
import gambar1 from "../Assets/gambarku1.png"
import { TypeAnimation } from 'react-type-animation'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className=' bg-darkbrown w-full text-white px-3 flex relative h-[calc(100vh-5rem)] font-[Comfortaa]'>
        <div className=' w-[60%] pt-10 ml-3 flex flex-col justify-between mt-10'>
            <div>
                <h1 className=' text-4xl'>Hello,</h1> 
                <h1 className=' text-5xl mt-4'>I'm Yehezkiel Fernandes Parapat</h1> 
                <div className=' flex space-x-3'>
                    <h3 className=' mt-3 text-3xl'>a </h3>
                    <h3 className=' mt-3 text-3xl'> 
                        <TypeAnimation 
                            sequence={ [
                                'Web Developer',1500,
                                'Mobile Developer',1500,
                                'Game Developer',1500
                            ]}
                        wrapper='span'
                        speed={50}
                        style={{ display : 'inline-block', color : 'goldenrod' }}
                        repeat={Infinity}
                        /> 
                    </h3>
                </div>
            </div>
            <div className='flex space-x-5 mb-24'>
                   <button className=' border-2 p-2 px-4 rounded-full border-goldenrod text-2xl hover:bg-goldenrod hover:border-transparent'>My Portofolio</button>
                   <a href="https://www.linkedin.com/in/yehezkiel-fernandes/" className='flex items-center text-lg'><FaLinkedin className=' text-3xl hover:text-goldenrod' /></a>
                    <a href="https://github.com/Hiroz-uchiha" className=' items-center flex text-lg'><FaGithub className=' text-3xl hover:text-goldenrod'/></a>
            </div>

        </div>
        
        <div className=' w-[40%] flex items-end'>
            <img src={gambar1} alt="Gambarku" className=' w-[70%]' />
        </div>
    </div>
  )
}

export default Header
