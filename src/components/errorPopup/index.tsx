import React from "react"

import styles from "./errorPopup.module.scss"

const ErrorPopup: React.FC = () => {

    const handlePageReload = () => window.location.reload()

    return (
        <div className={styles.wrapper}>
            <p>{"Ошибка, попробуйте перезагрузить страницу..."}</p>
            <button onClick={handlePageReload}>{"Перезагрузить!"}</button>
        </div>
    )
}

export default ErrorPopup