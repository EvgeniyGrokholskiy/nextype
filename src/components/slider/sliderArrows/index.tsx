import React from "react"

import styles from "./sliderArrows.module.scss"
import {IButtonProps} from "../../../types/types"
import {ReactComponent as NextArrow} from "./img/nextArrow.svg"
import {ReactComponent as PrevArrow} from "./img/prevArrow.svg"


const NextButton: React.FC<IButtonProps> = ({style, onClick}) => (
    <div
        className={styles.next_button}
        style={{...style, display: "block"}}
        onClick={onClick}
    >
        <NextArrow/>
    </div>
)


const PrevButton: React.FC<IButtonProps> = ({style, onClick}) => (
    <div
        className={styles.prev_button}
        style={{...style, display: "block"}}
        onClick={onClick}
    >
        <PrevArrow/>
    </div>
)

export {NextButton, PrevButton}