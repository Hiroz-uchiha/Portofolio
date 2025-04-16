import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterPorto = () => {
  return (
    <div className=' bg-darkbrown p-3 text-white flex flex-row space-x-2 w-full text-xs md:text-lg w-full mx-auto'>
      <p>© 2025 Yehezkiel Fernandes Parapat. All rights reserverd.</p>
      <div className='flex space-x-2'>
            <a href="https://www.linkedin.com/in/yehezkiel-fernandes/" className='flex items-center'><FaLinkedin className=' md:text-xl hover:text-goldenrod' /></a>
            <a href="https://github.com/Hiroz-uchiha" className=' items-center flex'><FaGithub className=' md:text-xl hover:text-goldenrod'/></a>
      </div>

    </div>
  )
}

export default FooterPorto
