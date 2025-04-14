import React, { useState } from 'react'
import { motion } from "framer-motion";

const ContactMe = () => {
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [pesan, setPesan] = useState("")

    const KirimData = () => {
        if (!nama || !email || !pesan) {
            alert("Semua field harus diisi")
        } else {
            const encodedMessage = `Nama : ${nama}%AEmail: ${email}%0APesan: ${pesan}`;
            const whatsappUrl = `https://wa.me/${process.env.REACT_APP_NO_TELP}?text=${encodedMessage}`

            window.open(whatsappUrl, "_blank")
            console.log(whatsappUrl)
            setNama("")

            setEmail("")

            setPesan("")
        }

    }

    return (
        <div className=' w-[90%] mx-auto'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className=' p-2 mt-5 w-[90%] mx-auto mb-5'>
                    <h1 className=' text-center text-3xl font-bold'>Contact</h1>

                    <div className=' mt-5 items-center flex flex-col space-y-5'>
                        <input type="text" placeholder='Name' value={nama} className=' p-2 px-4 w-[90%] shadow-md rounded-lg outline-none' onChange={(e) => setNama(e.target.value)} required />
                        <input type="email" placeholder='Email' value={email} className=' p-2 px-4 w-[90%] shadow-md rounded-lg outline-none' onChange={(e) => setEmail(e.target.value)} required />
                        <textarea className=' w-[90%] p-2 shadow-md rounded-md px-4 resize-none outline-none' value={pesan} placeholder='Pesan' onChange={(e) => setPesan(e.target.value)} required></textarea>
                        <button className=' bg-green-300 p-2 px-5 rounded-full hover:bg-green-400' onClick={KirimData}>Kirim</button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ContactMe
