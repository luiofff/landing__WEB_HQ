
import React from "react";
import styles from "./TextBlock.module.css"

const TextBlock = ({pretitle, title}:{pretitle: string, title: string}) => {
    return (
        <>
            <span className={styles.preTitle}>{pretitle}</span>
            <span className={styles.preTitle}>{title}</span>
        </>
    )
}

export default TextBlock;