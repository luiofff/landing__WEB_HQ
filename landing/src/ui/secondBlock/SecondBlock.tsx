import React from "react";
import styles from "./SecondBlock.module.css"

import image from "./Soldiers 1.png"

const SecondBlock = () => {
    return (
        <>
            <div className={styles.text__block}>
                <p className={styles.p__text}>Безграничная страсть к страйкболу и стремление к улучшению игрового опыта, привели нас к созданию инновационной системы для проведения страйкбольных игр с возможностью верификации и дистанционного отслеживания статистики.
Наша система основана на высокотехнологичных компонентах, которые позволяют игрокам наслаждаться аутентичным страйкболом в самых разных условиях. Она состоит из нескольких ключевых элементов.</p>
            </div>
            <div className={styles.image__block}></div>
            <img style={{ marginBottom: "4rem" }} src={image} alt="" />
        </>
    )
}

export default SecondBlock;