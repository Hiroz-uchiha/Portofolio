import React from 'react'
import gambar1 from "../Assets/gambarku1.png"
import { TypeAnimation } from 'react-type-animation'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className=' bg-darkbrown text-white px-3 flex relative md:h-[calc(100vh-5rem)] font-[Comfortaa] w-full mx-auto '>
        <div className=' md:w-[60%] w-full pt-10 md:ml-3  flex flex-col justify-between mt-5 space-y-20 '>
            <div>
                <h1 className=' md:text-4xl text-2xl'>Hello,</h1> 
                <h1 className=' md:text-5xl mt-4 text-3xl'>I'm Yehezkiel Fernandes Parapat</h1> 
                <div className=' flex space-x-3'>
                    <h3 className=' mt-3 md:text-3xl text-2xl'>a </h3>
                    <h3 className=' mt-3 md:text-3xl text-2xl'> 
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
            
        <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
            <div className='flex space-x-5 mb-4 md:mb-24'>
                <a href="./cv_yehezkiel_fernandes.pdf"> 
                    <button className=' border-2 p-2 px-5 rounded-full border-goldenrod md:text-xl hover:bg-goldenrod hover:border-transparent'>Get My Resume</button>
                </a>
                   
                   <a href="https://www.linkedin.com/in/yehezkiel-fernandes/" className='flex items-center text-lg'><FaLinkedin className=' md:text-3xl text-2xl hover:text-goldenrod' /></a>
                    <a href="https://github.com/Hiroz-uchiha" className=' items-center flex text-lg'><FaGithub className=' md:text-3xl text-2xl hover:text-goldenrod'/></a>
            </div>
                    </motion.div>
        </div>

        <div className=' md:w-[40%] flex items-end'>
        <motion.div
                        initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                    >
                <img src={gambar1} alt="Gambarku" className=' w-[70%] hidden md:block' />
                    </motion.div>
        </div>
    </div>
  )
}

export default Header
