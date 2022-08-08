import React from "react"

import styles from "./card.module.scss"
import {ICardProps} from "../../types/types"


const Card: React.FC<ICardProps> = ({id, image, name, url, description, tags}) => {

    const tagsToRender = tags.map(tag => <span key={tag.id} className={styles.tag_text}>{tag.name}</span>)

    return (
        <a href={url} className={styles.link} target={"_blank"} referrerPolicy={"no-referrer"} rel={"noreferrer"}>
            <div className={styles.wrapper}>
                <img className={styles.image} src={image} alt={name} height={320} width={320}/>
                <div className={styles.text_block}>
                    <p className={styles.text}>{description}</p>
                    <div className={styles.tag_block}>
                        {tagsToRender}
                    </div>
                </div>
                <div className={styles.gradient}/>
            </div>
        </a>
    )
}

export default Card