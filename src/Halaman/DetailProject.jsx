import React from 'react'
import gambarSkripsi from "../Assets/project/Skripsi.png"
import { FaArrowLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';

const DetailProject = () => {
    const navigasi = useNavigate();
    const location = useLocation();
    const {judul, img, isi, file} = location.state; 

    const Kembali = () => {
        navigasi("/")
    }

  return (
    <div>
        <div className=' bg-darkbrown w-full p-3 text-white'>
            <button className=' text-white text-2xl' onClick={Kembali}><FaArrowLeft /></button>
        </div>

        <div className=' w-[90%] mx-auto shadow-md p-2 bg-white rounded-md mt-5 mb-4'>
            
                <div className=' flex'>
                    <div className='  w-3/4 items-center flex justify-center'>
                        <img src={img} alt="" className=' w-full h-[32rem]' />
                    </div>
                    
                    <div className=' w-3/4 flex flex-col justify-between'>
                            <div>
                                <h1 className=' font-bold text-center text-2xl mx-3'>{judul}</h1>
                                <p className=' mt-3 text-lg mx-4 p-2'>{isi}</p>
                            </div>

                            <div className='flex space-x-5 mb-3 ml-4'>
                                <p className=' text-lg items-center flex px-1 font-bold'>Link : </p>
                                {
                                    file.map((item,index) => (
                                        <div key={index} className='flex'>
                                            <a href={item.link} className=' bg-white p-2 px-4 border shadow-md rounded-full hover:bg-darkbrown hover:text-white'>{item.nama}</a>
                                        </div>
                                    ))
                                }
                            </div>
                    </div>
                </div>
        

        </div>
    </div>
  )
}

export default DetailProject
