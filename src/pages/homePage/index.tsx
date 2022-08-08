import React, {useState} from "react"

import styles from "./homePage.module.scss"
import Categories from "../../components/categories"
import ErrorPopup from "../../components/errorPopup"
import SliderComponent from "../../components/slider"
import {useGetCardsDataQuery, useGetCategoriesQuery} from "../../store/myJsonServerApi/myJsonServerApi"


const HomePage: React.FC = () => {

    const [activeCategory, setActiveCategory] = useState<number>(1)

    const setActiveCategoryHandler = (id: number) => () => {
        setActiveCategory(id)
    }

    const {
        isLoading: isLoadingCategories,
        isError: isErrorCategories,
        //error: categoriesErrorMessage,
        data: categoriesData
    } = useGetCategoriesQuery()

    const {
        isLoading: isLoadingCardData,
        isError: isErrorCardData,
        //error: cardErrorMessage,
        data: cardData
    } = useGetCardsDataQuery(activeCategory)

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.header}>{"Блог и соцсети"}</h1>
            <p className={styles.text}>{"Идейные соображения высшего порядка, а также сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития."}</p>
            <div className={styles.categories_block}>
                {
                    (isErrorCardData || isErrorCategories) && <ErrorPopup/>
                }
                <Categories activeCategory={activeCategory} isLoading={isLoadingCategories} data={categoriesData}
                            onClickHandler={setActiveCategoryHandler}/>
            </div>
            <section>
                <SliderComponent cardData={cardData} isLoadingCardData={isLoadingCardData}/>
            </section>
        </div>
    )
}

export default HomePage