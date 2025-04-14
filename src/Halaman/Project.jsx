import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import data from "./data"

const Project = () => {
    const navigasi = useNavigate();

    return (
        <div className=' mt-10 mb-5 p-3 w-[90%] mx-auto'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h1 className=' text-center text-3xl font-bold'>Projects</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className=' mx-4 flex mt-5 flex-wrap justify-center'>
                    {data.map((items, index) => (
                        <div key={index} className='mx-5 mt-4' >
                            <div className=' w-96 h-96 rounded-md shadow-md bg-white'>
                                <div className=' h-[70%] overflow-hidden'>
                                    <img src={`${items.img}`} alt="Gambar" className=' rounded-t-md mx-auto w-full h-full object-cover' />
                                </div>
                                <div className=' flex flex-col justify-between pb-3 h-[30%]'>
                                    <h1 className=' text-center text-lg p-2 mb-1 w-full truncate'>{items.judul}</h1>
                                    <button className=' bg-gray-200 px-6 py-2 rounded-full font-bold mx-auto flex hover:bg-darkbrown hover:text-white' onClick={() => navigasi("/detailProject", {state : items})}>Lihat Detail</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>

    )
}

export default Project
