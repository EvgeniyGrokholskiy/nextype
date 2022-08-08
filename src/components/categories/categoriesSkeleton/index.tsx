import React from "react"

import styles from "./categoriesSkeleton.module.scss"


const CategorySkeleton: React.FC = () => (
    <div className={styles.wrapper}>
        <div className={styles.skeleton}/>
        <div className={styles.skeleton}/>
        <div className={styles.skeleton}/>
    </div>
)

export default CategorySkeleton