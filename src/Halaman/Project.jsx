import React from 'react'
import gambarLostDoll from "../Assets/project/LostDoll.png"
import gambarSkripsi from "../Assets/project/Sclearn.png"
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
            isi: `Dalam penyusunan skripsi ini, kami bekerja secara tim untuk mengembangkan sebuah aplikasi edukasi interaktif berbasis Android bernama scleARn. Aplikasi ini dirancang khusus untuk membantu siswa SMA dalam memahami organ dalam manusia secara lebih mendalam dan menarik.

scleARn memanfaatkan teknologi Augmented Reality (AR) untuk menampilkan visualisasi organ dalam tubuh manusia secara 3D dan real-time, memungkinkan pengguna melihat dan mempelajari anatomi tubuh secara langsung melalui kamera perangkat mereka.

Selain itu, aplikasi ini dilengkapi dengan fitur interaktif berbasis suara, seperti perintah suara (Speech-to-Text) dan text-to-speech, yang memperkaya pengalaman belajar siswa. Kami juga mengintegrasikan AI Chat Assist menggunakan layanan Gemini untuk menjawab pertanyaan-pertanyaan siswa secara langsung dan kontekstual.

Pengembangan aplikasi dilakukan secara kolaboratif menggunakan metode AGILE, dengan pendekatan iteratif untuk memastikan setiap tahapan pembangunan aplikasi berjalan efektif dan sesuai dengan kebutuhan pengguna.

Hasil pengujian menunjukkan bahwa scleARn mampu menjalankan fungsinya dengan baik dan mendapatkan respons positif dari pengguna, dengan tingkat kepuasan mencapai 92,25%.`,
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
            isi: "Saya adalah seorang programmer lead dalam pengembangan game LostDoll, sebuah proyek yang kami kerjakan dalam program MSIB Infinite Learning. Dalam tim yang terdiri dari empat orang, saya bertanggung jawab penuh terhadap pengembangan game mechanic serta beberapa aspek teknis lainnya yang mendukung keseluruhan gameplay dari game ini. LostDoll merupakan game 2D dengan nuansa misteri dan horor yang mengisahkan perjalanan seorang anak kecil yang secara tidak sengaja masuk ke dunia hantu. Dalam dunia yang penuh teka-teki dan suasana mencekam tersebut, pemain akan memandu sang anak untuk mencari jalan keluar sambil mengungkap rahasia yang tersembunyi di dalamnya. Sebagai lead programmer, saya tidak hanya menyusun sistem mekanik seperti interaksi objek, navigasi karakter, dan sistem level, tetapi juga ikut memastikan seluruh elemen teknis game berjalan harmonis dengan visual dan cerita yang dibangun oleh tim. Kolaborasi ini menjadi pengalaman berharga dalam mengembangkan game dari tahap konsep hingga playable product.",
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
            isi: `TabungPintar adalah sebuah website sederhana yang dirancang untuk membantu pengguna dalam mengatur keuangan pribadi secara efisien dan mudah. Website ini memiliki tiga fitur utama, yaitu Pemasukan, Pengeluaran, dan Rekening, yang saling terintegrasi untuk memberikan pengalaman pencatatan keuangan yang rapi dan terorganisir.

Fitur Rekening memungkinkan pengguna untuk membuat satu atau lebih rekening dengan memasukkan nama rekening serta jumlah saldo awal. Setiap transaksi keuangan yang dilakukan nantinya akan tercatat berdasarkan rekening yang dipilih oleh pengguna.

Sementara itu, pada fitur Transaksi, pengguna dapat mencatat dua jenis transaksi:
    Pemasukan, yaitu uang yang masuk ke dalam rekening.

    Pengeluaran, yaitu uang yang keluar dari rekening.

Untuk setiap transaksi, pengguna harus terlebih dahulu memilih rekening yang digunakan. Setelah itu, pengguna dapat memilih jenis transaksi, mengisi jumlah uang, dan mencatat tanggal transaksi tersebut. Semua data ini akan terekam dan ditampilkan secara ringkas untuk memudahkan pengguna memantau kondisi keuangan mereka dari waktu ke waktu.

Dengan tampilan yang sederhana dan fungsi yang jelas, TabungPintar menjadi alat bantu yang efektif bagi siapa pun yang ingin mulai mengelola keuangan secara lebih baik.`,
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
            isi: `Surprise Birthday adalah sebuah website interaktif yang saya kembangkan pada awal tahun 2023, ditujukan untuk membantu orang-orang yang bingung ingin memberikan hadiah ulang tahun yang berkesan dan berbeda. Website ini dirancang untuk menghadirkan pengalaman ulang tahun virtual yang terasa seperti perayaan di dunia nyata.

Ketika pengguna membuka website ini, mereka akan diminta untuk memasukkan nama penerima ulang tahun terlebih dahulu. Setelah itu, suasana akan dibuat seperti ruangan gelap—lampu mati—untuk membangun kejutan. Pengguna kemudian dapat menekan tombol "Hidupkan Lampu", yang secara perlahan menghidupkan suasana pesta.

Selanjutnya, tombol "Mainkan Musik" akan memutar lagu ulang tahun yang ceria, disusul dengan animasi hiasan pesta seperti balon dan lampu warna-warni yang mulai bermunculan di layar, menciptakan suasana yang meriah dan menyenangkan.

Bagian paling spesial datang ketika pengguna menekan tombol "Tiup Lilin"—kue ulang tahun dengan lilin menyala akan muncul, dan lilinnya akan padam secara animasi, memberikan kesan seperti meniup lilin sungguhan. Setelah itu, sebuah kartu ucapan akan tampil di layar, berisi pesan ulang tahun yang bisa disesuaikan atau diberikan secara default.

Website ini menjadi solusi unik dan sederhana untuk memberi kejutan ulang tahun secara digital, terlebih ketika seseorang tidak bisa hadir secara langsung namun tetap ingin memberikan momen spesial yang berkesan.`,
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
