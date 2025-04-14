import React, { Fragment } from 'react'
import { motion } from "framer-motion";
import gambar2 from "../Assets/myImage.png"

const About = () => {
  return (
    <Fragment>
      <div className=' md:w-4/5 w-[90%] mt-5 mx-auto container'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className='text-center text-3xl font-bold '>About</h1>
        </motion.div>

        <div className=' p-3 flex justify-around mt-3 md:flex-row flex-col'>
          <div className=' md:w-[35%] md:pl-8 flex-shrink-0 md:mr-3 w-full'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img src={gambar2} alt="Gambarku" className=' md:w-[90%] rounded-xl shadow-md w-[70%] mx-auto' />

            </motion.div>
          </div>

          <div className=' md:w-[70%] md:text-xl text-justify mt-4'>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className=' space-y-3'
            >
              <p className='text-indent-first-line'>Hi! I am Yehezkiel Fernandes Parapat a passionate and adaptable developer with a strong interest in Website Development, Mobile App Development, UI/UX Design, and Game Programming. I have the capability to work on both frontend and backend development, depending on the specific needs of each project.
              </p>
              <p className='text-indent-first-line'>Currently, I serve as a Laboratory Assistant at Mikroskil University, where I help students understand programming concepts while continuing to enhance my own technical skills. This role has sharpened my communication and problem-solving abilities in real-world learning environments.
              </p>
              <p className='text-indent-first-line'>I completed my undergraduate studies in just 3.5 years, demonstrating my discipline, time management, and dedication to technology. This academic journey laid a solid foundation for my growth as a developer, both in terms of logic and creativity.
              </p>
              <p className='text-indent-first-line'>In development, I use React for web and Flutter for mobile on the frontend, and Node.js with Express on the backend. I also work with various APIs to extend functionality. For UI/UX design, I rely on Figma to create user-friendly and visually appealing interfaces, while in game development, I use Unity to build interactive experiences.
              </p>
              <p className='text-indent-first-line'>For me, good software is not just about functionality but should also offer a seamless and engaging user experience. I strive to combine technical precision with thoughtful design to build digital solutions that are practical, beautiful and impactful.
              </p>

            <hr className=' border-t-2 border-gray-700 mt-3' />
            
            <div className='flex justify-between px-2 mt-2 md:flex-row flex-col space-y-1'>
              <ul className=' space-y-1 md:space-y-2'>
                <li>Name : Yehezkiel Fernandes Parapat</li>
                <li>Age : 22 years old</li>
              </ul>
              <ul className=' space-y-1 md:space-y-2'>
                <li>Email : yehezkielfernandes1@gmail.com</li>
                <li>From : Medan City, North Sumatra</li>
              </ul>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default About
