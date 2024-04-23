import Footer from "../MainPage/ui/footer/Footer"
import Navbar from "../MainPage/ui/navbar/Navbar"
import FirstBlock from "./ui/firstBlock/FirstBlock"
import FourBlock from "./ui/fourBlock/FourBlock"
import SecondBlock from "./ui/secondBlock/SecondBlock"
import ThirdBlock from "./ui/thirdBlock/ThirdBlock"


export default function SecondPage() {
    return (
        <>
            
            <main  style={{ width: "100%", display: "grid", placeItems: "center" }}>
                <div style={{ maxWidth: "1920px" }}>
                <Navbar />
                    <FirstBlock />
                    <div style={{ width: "100%", height: "10vh", display: "grid", placeItems: "center" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="55" viewBox="0 -960 960 960" width="55"><path fill="#FF504E" d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    </div>
                    <SecondBlock />
                    <div style={{ width: "100%", height: "10vh", display: "grid", placeItems: "center" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="55" viewBox="0 -960 960 960" width="55"><path fill="#FF504E" d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    </div>
                    <ThirdBlock />
                    <div style={{ width: "100%", height: "10vh", display: "grid", placeItems: "center" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="55" viewBox="0 -960 960 960" width="55"><path fill="#FF504E" d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    </div>
                    <FourBlock />
                    <div style={{ width: "100%", height: "10vh", display: "grid", placeItems: "center" }}>
                        <a href="/error" style={{ color: "#8A2C30", fontFamily: '"IBM Plex Mono", monospace', textDecoration: "underline" }}>ХОЧУ КУПИТЬ</a>
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    )
}