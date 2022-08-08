import React from "react"

import styles from "./categories.module.scss"
import {ICategoriesProps} from "../../types/types"


const Categories: React.FC<ICategoriesProps> = ({activeCategory, isLoading, data, onClickHandler}) => (
    <nav>
        <ul className={styles.wrapper}>
            {
                !isLoading
                    ? data?.map(categoriesItem => <li
                        key={categoriesItem.id}
                        className={`${styles.text} ${activeCategory === categoriesItem.id && styles.active}`}
                        onClick={onClickHandler(categoriesItem.id)}>
                        {
                            categoriesItem.name
                        }
                    </li>)
                    : <span>{"skeleton"}</span>
            }
        </ul>
    </nav>
)

export default Categories