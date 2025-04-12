import React, { Fragment } from 'react'
import { motion } from "framer-motion";
import gambar2 from "../Assets/gambar2.png"
import IconArrow from "../Assets/IconArrow.png"

const About = () => {
  return (
    <Fragment>
      <div className=' w-4/5 mt-5 mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className='text-center text-3xl '>About</h1>
        </motion.div>

        <div className=' p-3 flex justify-around mt-3'>
          <div className=' w-[35%] pl-8 flex-shrink-0 mr-3'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img src={gambar2} alt="Gambarku" className=' w-[90%] rounded-xl shadow-md' />

            </motion.div>
          </div>

          <div className=' w-[70%] font-[Roboto] text-xl text-justify '>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className='text-indent-first-line'>Saya adalah Yehezkiel Fernandes Parapat seorang developer dengan minat besar di bidang Website Development, Mobile App, UI/UX Design, dan Game Programming. Saya memiliki kemampuan untuk mengerjakan bagian frontend maupun backend, tergantung kebutuhan proyek.</p>
              <p className='text-indent-first-line'>Saat ini, saya juga berperan sebagai Asisten Laboratorium di Universitas Mikroskil, sebuah pengalaman yang memungkinkan saya untuk terus mengembangkan keterampilan teknik sekaligus membantu mahasiswa dalam memahami konsep-konsep pemrograman. Saya menyelesaikan studi sarjana dalam waktu 3,5 tahun, yang mengasah disiplin, manajemen waktu, dan komitmen saya terhadap dunia teknologi.
              </p>
              <p className='text-indent-first-line'>Saya berfokus untuk membangun aplikasi yang tidak hanya berfungsi dengan baik, tetapi juga nyaman digunakan dan menarik secara visual. Untuk sisi frontend, saya menggunakan React untuk web dan Flutter untuk mobile, sedangkan untuk backend, saya terbiasa menggunakan Node.js, Express, serta integrasi berbagai API.
              </p>
              <p className='text-indent-first-line'>Dalam hal UI/UX Design, saya menggunakan Figma untuk merancang antarmuka yang intuitif dan user-friendly. Di dunia Game Development, saya mengembangkan game menggunakan Unity sebagai platform utama.
              </p>
              <p className='text-indent-first-line'>Bagi saya, menciptakan pengalaman pengguna yang menyenangkan sama pentingnya dengan memastikan performa aplikasi yang optimal. Dengan perpaduan antara skill teknis dan desain, saya berkomitmen untuk menciptakan solusi digital yang fungsional, estetis, dan berdampak.
              </p>

            <hr className=' border-t-2 border-gray-700 mt-3' />
            
            <div className='flex justify-between px-2 mt-2'>
              <ul className=' space-y-2'>
                <li>Nama : Yehezkiel Fernandes Parapat</li>
                <li>Umur : 22 Tahun</li>
              </ul>
              <ul className=' space-y-2'>
                <li>Email : yehezkielfernandes1@gmail.com</li>
                <li>Asal : Kota Medan, Sumatera Utara</li>
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
