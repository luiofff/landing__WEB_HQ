import Footer from "../MainPage/ui/footer/Footer"
import Navbar from "../MainPage/ui/navbar/Navbar"

import styles from "../ErrorPage/ErrorPage.module.css"

import skull from './img/errorPage_image.gif'

export default function ErrorPage() {
    return (
        <>
            
       
                <div className={styles.hero}>
                    <div className={styles.container}>

                        <Navbar />
                        <div className={styles.container__content}>
                            <div className={styles.line__block}>
                                <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1362 37" fill="none">
                                    <path d="M1 36L188 1H1174L1361 36" stroke="#8A2C30"/>
                                </svg>
                            </div>

                            <div className={styles.skull_block}>
                                <img src={skull} alt="" />

                                <h1 className={styles.title}>РАЗДЕЛ В РАЗРАБОТКЕ</h1>
                            </div>
                            

                            <div className={styles.line__block}>
                                <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1362 37" fill="none">
                                    <path d="M1 1L188 36H1174L1361 1" stroke="#8A2C30"/>
                                </svg>
                            </div>
                        </div>
                        
                        
                    </div>  
                </div> 
         
        </>
    )
}