import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { FaUnity } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
    const data1 = [
        {
            logo: <FaHtml5 className=' text-orange-600' />,
            nama: "HTML"
        },
        {
            logo: <IoLogoJavascript className=' text-yellow-500' />,
            nama: "Javascript"
        },
        {
            logo: <RiTailwindCssFill className=' text-cyan-400' />,
            nama: "Tailwind"
        },
        {
            logo: <FaBootstrap className=' text-purple-700' />,
            nama: "Bootstrap"
        },
        {
            logo: <FaNodeJs className=' text-green-600' />,
            nama: "NodeJs"
        },
        {
            logo: <SiMongodb className=' text-green-700' />,
            nama: "MongoDB"
        },
    ]

    const data2 = [
        {
            logo: <SiMysql className=' text-blue-600' />,
            nama: "Mysql"
        },
        {
            logo: <FaReact className=' text-blue-500' />,
            nama: "React"
        },
        {
            logo: <FaFigma className=' text-indigo-500' />,
            nama: "Figma"
        },
        {
            logo: <SiCanva className=' text-purple-400' />,
            nama: "Canva"
        },
        {
            logo: <FaFlutter className=' text-blue-400' />,
            nama: "Flutter"
        },
        {
            logo: <FaUnity className=' text-black' />,
            nama: "Unity"
        },
    ]
    return (
        <div className=' mt-5 md:w-4/5 mx-auto mb-2 container p-2 w-[90%]'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h1 className=' text-center text-3xl font-bold'>Skills</h1>
            </motion.div>

            <div className=' md:text-8xl flex md:flex-row space-x-3 mt-3'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className=' bg-white p-2 flex flex-col w-1/2 space-y-4 shadow-md rounded-md'
                >

                    {data1.map((item, index) => (
                        <div key={index} className=' ml-4' >
                            <ul className='flex space-x-4 md:flex-row'>
                                <li>{item.logo}</li>
                                <li className=' text-xl items-center flex'>{item.nama}</li>
                            </ul>
                        </div>
                    ))}

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                     className=' bg-white p-2 flex flex-col w-1/2 space-y-4 shadow-md rounded-md'
                >
                        {data2.map((item, index) => (
                            <div key={index} className=' ml-4' >
                                <ul className='flex md:flex-row space-x-4'>
                                    <li>{item.logo}</li>
                                    <li className=' text-xl items-center flex'>{item.nama}</li>
                                </ul>
                            </div>
                        ))}
                </motion.div>
            </div>

        </div>
    )
}

export default Skills
