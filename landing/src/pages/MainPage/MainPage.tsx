import React from "react"
import Navbar from "./ui/navbar/Navbar"
import StartBlock from "./ui/startBlock/StartBlock"
import SecondBlock from "./ui/secondBlock/SecondBlock"
import ThirdBlock from "./ui/thirdBlock/ThirdBlock"
import FourBlock from "./ui/fourBlock/FourBlock"
import FiveBlock from "./ui/fiveBlock/FiveBlock"
import Footer from "./ui/footer/Footer"


export default function MainPage() {
    return (
        <>
           
            <main  style={{ width: "100%", display: "grid", placeItems: "center" }}>
                <div style={{ maxWidth: "1920px" }}>
                    <Navbar />
                    <StartBlock />
                    <SecondBlock />
                    <ThirdBlock />
                    <FourBlock />
                    <FiveBlock />
                    <Footer />
                </div>
            </main>
        </>
    )
}