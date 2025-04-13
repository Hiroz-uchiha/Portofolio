import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterPorto = () => {
  return (
    <div className=' bg-darkbrown p-3 text-white flex space-x-2'>
      <p>© 2025 Yehezkiel Fernandes Parapat. All rights reserverd.</p>
      <div className='flex space-x-2'>
            <a href="https://www.linkedin.com/in/yehezkiel-fernandes/" className='flex items-center'><FaLinkedin className=' text-xl hover:text-goldenrod' /></a>
            <a href="https://github.com/Hiroz-uchiha" className=' items-center flex'><FaGithub className=' text-xl hover:text-goldenrod'/></a>
      </div>

    </div>
  )
}

export default FooterPorto
