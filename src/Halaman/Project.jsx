import React from 'react'
import gambarLostDoll from "../Assets/project/LostDoll.png"
import gambarSkripsi from "../Assets/project/Skripsi.png"
import gambarUlangTahun from "../Assets/project/ulangTahun.png"
import gambarTabungPintar from "../Assets/project/TabungPintar.png"
import "../Assets/project/ulangTahun.png"
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'

const Project = () => {
    const navigasi = useNavigate();
    const data = [
        {
            judul: "SKRIPSI IMPLEMENTASI SISTEM AUGMENTED REALITY UNTUK ORGAN DALAM DENGAN INTEGRASI BERBASIS SUARA",
            img: gambarSkripsi,
            isi: "Ini adalah skripsi saya",
            file : [
                {
                    nama : "Github Tim",
                    link : "https://github.com/Hiroz-uchiha/SkripsiARChatAssistFinal"
                },
               
            ]
        },
        {
            judul: "Game LostDoll",
            img: gambarLostDoll,
            isi: "Ini adalah project dari MSIB Infinite Learning",
            file : [
                { 
                    nama : "Github Tim",
                    link : "https://github.com/RickiGut/Lost-Doll"
                },
                {
                    nama : "Website",
                    link : "https://ats-studio.itch.io/lost-doll"
                }
            ]
        },
        {
            judul: "Website TabungPintar",
            img: gambarTabungPintar,
            isi: "Ini adalah Project sederhana saya untuk pengelolaan uang",
            file : [
                {
                    nama : "Github Frontend",
                    link : "https://github.com/Hiroz-uchiha/Tabung_Pintar_Frontend"
                },
                { 
                    nama : "Github Backend",
                    link : "https://github.com/Hiroz-uchiha/Tabung_Pintar_Backend"
                },
                {
                    nama : "Website",
                    link : "https://tabung-pintar-frontend.vercel.app/login"
                }
            ]
        },
        {
            judul: "Surpise Birthday",
            img: gambarUlangTahun,
            isi: "Ini adalah Project pertama saya tahun 2023 awal tahun yang ditunjukan kepada orang yang ulang tahun",
            file : [
                {
                    nama : "Github Frontend",
                    link : "https://github.com/Hiroz-uchiha/birthdayHiroz.github.io"
                },
                {
                    nama : "Website",
                    link : "https://hiroz-uchiha.github.io/birthdayHiroz.github.io/"
                }
            ]
        },
    ]

    return (
        <div className=' mt-8 mb-5 p-3'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h1 className=' text-center text-3xl'>Projects</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className=' mx-4 flex mt-3 flex-wrap justify-center'>
                    {data.map((items, index) => (
                        <div key={index} className='mx-5 mt-4' >
                            <div className=' w-96 h-96 rounded-md shadow-md bg-white'>
                                <div className=' h-[70%] overflow-hidden'>
                                    <img src={items.img} alt="Gambar" className=' rounded-t-md mx-auto w-full h-full object-cover' />
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
