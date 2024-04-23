
import React from "react"
import styles from "./FourBlock.module.css"
import TextBlock from "./components/TextBlock"



const FourBlock = () => {
    return (
        <>
            <div style={{ height: "10vh", width: "100%", display: "flex", justifyContent: "center" }}>
                <h1 className={styles.title}>ПОСЛЕДНИЕ РЕЛИЗЫ</h1>
            </div>

            <div className={styles.list_block}>
                <a href="/error" className={styles.list_elem}>
                    <span className={styles.pretitle}>14/01/2024</span>
                    <h1 className={styles.title__list}>КИБЕРШТАБ v.1.0 // Первый запуск в реальных условиях</h1>
                </a>
                <a href="/error" className={styles.list_elem}>
                    <span className={styles.pretitle}>07/03/2024</span>
                    <h1 className={styles.title__list}>Запуск основного сайта // Подробное описание игрового комплекта на странице</h1>
                </a>
                <a href="/error" className={styles.list_elem}>
                    <span className={styles.pretitle}>25/04/2024</span>
                    <h1 className={styles.title__list}>Публикация приложения в маркетах // Скачивайте на RuStore</h1>
                </a>
                <a href="/error" className={styles.list_elem}>
                    <span className={styles.pretitle}>26/04/2024</span>
                    <h1 className={styles.title__list}>КИБЕРШТАБ v.1.1 // Добавлен режим “Захват флага”</h1>
                </a>
            </div>
            <div style={{ height: "10vh", width: "100%", display: "flex", justifyContent: "center", marginBottom: "4rem" }}>
                <a href="/error" className={styles.footer__button}>ПОСМОТРЕТЬ ВСЕ</a>
            </div>
        </>
    )
}

export default FourBlock