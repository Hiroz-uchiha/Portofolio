import gambarLostDoll from "../Assets/project/LostDoll.png"
import gambarSkripsi from "../Assets/project/Sclearn.png"
import gambarUlangTahun from "../Assets/project/ulangTahun.png"
import gambarTabungPintar from "../Assets/project/TabungPintar.png"
import gambarMobileFrontend from "../Assets/project/MobileFrontend.png"
import "../Assets/project/ulangTahun.png"


const data = [
    {
        judul: "SKRIPSI IMPLEMENTASI SISTEM AUGMENTED REALITY UNTUK ORGAN DALAM DENGAN INTEGRASI BERBASIS SUARA",
        img: gambarSkripsi,
        isi: `In the preparation of this thesis, we worked as a team to develop an interactive educational application for Android called scleARn. This application is specifically designed to help high school students gain a deeper and more engaging understanding of the human internal organs. scleARn utilizes Augmented Reality (AR) technology to display 3D, real-time visualizations of the human internal organs, allowing users to explore and study the human anatomy directly through their devices camera. Additionally, the application features interactive voice-based functions, such as Speech-to-Text and Text-to-Speech commands, which enhance the learning experience for students. We also integrated an AI Chat Assist using Gemini services to provide direct, contextual responses to student questions. The development of the application was done collaboratively using the AGILE methodology, with an iterative approach to ensure each phase of the applications development was effective and met the users' needs. Testing results showed that scleARn performs its functions well and received positive feedback from users, achieving a satisfaction rate of 92.25%.`,
        file: [
            {
                nama: "Github Tim",
                link: "https://github.com/Hiroz-uchiha/SkripsiARChatAssistFinal"
            },

        ]
    },
    {
        judul: "Game LostDoll",
        img: gambarLostDoll,
        isi: "I am the lead programmer for the development of the game LostDoll, a project we worked on as part of the MSIB Infinite Learning program. In a team of four, I was fully responsible for developing the game mechanics and several other technical aspects that support the overall gameplay. LostDoll is a 2D game with a mystery and horror atmosphere, telling the story of a young child who accidentally enters a haunted world. In this world full of puzzles and a tense ambiance, players guide the child to find an escape while uncovering hidden secrets. As the lead programmer, I was not only in charge of building the mechanics such as object interaction, character navigation, and level systems, but also ensured that all technical elements worked harmoniously with the visuals and story crafted by the team. This collaboration was a valuable experience in developing a game from concept to a playable product",
        file: [
         
            {
                nama: "Website",
                link: "https://ats-studio.itch.io/lost-doll"
            }
        ]
    },
    {
        judul: "Website TabungPintar",
        img: gambarTabungPintar,
        isi: `TabungPintar is a simple website designed to help users manage their personal finances efficiently and easily. The website features three main functionalities: Income, Expenses, and Accounts, which are integrated to provide an organized and tidy financial tracking experience. The Accounts feature allows users to create one or more accounts by entering the account name and initial balance. Every financial transaction made will be recorded based on the selected account. Meanwhile, in the Transactions feature, users can record two types of transactions. Income, which refers to money coming into the account, Expenses, which refers to money going out of the account. For each transaction, users must first select the account they are using. After that, users can choose the type of transaction, enter the amount of money, and record the transaction date. All of this data will be recorded and displayed in a summary format to help users track their financial condition over time.With a simple interface and clear functionality, TabungPintar becomes an effective tool for anyone who wants to start managing their finances better.`,
        file: [
            {
                nama: "Github Frontend",
                link: "https://github.com/Hiroz-uchiha/Tabung_Pintar_Frontend"
            },
            {
                nama: "Github Backend",
                link: "https://github.com/Hiroz-uchiha/Tabung_Pintar_Backend"
            },
            {
                nama: "Website",
                link: "https://tabung-pintar-frontend.vercel.app/login"
            }
        ]
    },
    {
        judul: "Project UAS Mobile Frontend Sekolah Panyabungan",
        img: gambarMobileFrontend,
        isi: `This project is a UAS assignment that focuses on developing a mobile application interface (frontend) for Panyabungan School. This application is specifically designed for the needs of students in accessing various important information about learning activities at school through mobile devices. On the home page, we designed a view that displays the subject matter that is taking place on that day, so that students can immediately know what to study without the need to open a manual schedule. In addition, there is also information on the current date integrated with the system, as well as navigation shortcuts to various other main features such as assignments, grades, and student bios. For the assignment feature, we adopt a similar concept with Microsoft Teams, where students can see a list of assignments given by the teacher, complete with deadlines and work status such as not yet done, in progress, or collected. In the account section, students can access their complete biodata, from name, NIS, class, to profile picture. Not only that, this application also provides access to report card information, so students can monitor their academic progress regularly directly from the application. Overall, this application was developed to provide convenience, clarity of information, and support the student learning process with a practical and efficient digital approach.`,
        file: [
            {
                nama: "Tampilan Aplikasi",
                link: "https://drive.google.com/drive/folders/1VZVIznbaVBlD0boN-zqp-1hl0W3_erOD?usp=sharing"
            },
            {
                nama: "Download Aplikasi",
                link: "./TimATom.apk"
            },
        ]
    },
    {
        judul: "Website SurpriseBirthday",
        img: gambarUlangTahun,
        isi: `Surprise Birthday is an interactive website I developed at the beginning of 2023, aimed at helping people who are unsure about giving a memorable and unique birthday gift. This website is designed to offer a virtual birthday experience that feels like a real-life celebration. When users open the website, they are first prompted to enter the name of the birthday recipient. The atmosphere is then set to simulate a dark room, with the lights off, to build up the surprise. Users can then press the "Turn On the Lights" button, which gradually brightens the party scene.Next, the "Play Music" button plays cheerful birthday music, followed by party decorations such as balloons and colorful lights appearing on the screen, creating a festive and joyful atmosphere. The most special moment comes when users press the "Blow Out the Candle" button. A birthday cake with a lit candle appears, and the candle is blown out in an animated fashion, giving the impression of blowing out a real candle. After that, a birthday card with a message, either customizable or default, will appear on the screen. This website serves as a unique and simple solution to give a digital birthday surprise, especially when someone cannot be present physically but still wants to provide a memorable and special moment.`,
        file: [
            {
                nama: "Github Frontend",
                link: "https://github.com/Hiroz-uchiha/birthdayHiroz.github.io"
            },
            {
                nama: "Website",
                link: "https://hiroz-uchiha.github.io/birthdayHiroz.github.io/"
            }
        ]
    }
]

export default data