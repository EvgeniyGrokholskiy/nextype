import React from "react"

import styles from "./cardSkeleton.module.scss"


const CardSkeleton:React.FC = () => (
    <div className={styles.wrapper}>
        <p className={styles.image}>
            {"Загрузка..."}
        </p>
        <p className={styles.text_block}>
            {"Загрузка..."}
        </p>
    </div>
)

export default CardSkeleton