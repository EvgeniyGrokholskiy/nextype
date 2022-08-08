import React, {useState} from "react"

import Card from "../../components/card"
import styles from "./homePage.module.scss"
import {ICardData} from "../../models/models"
import Categories from "../../components/categories"
import ErrorPopup from "../../components/errorPopup"
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

    console.log(`categoriesData: ${categoriesData},cardData: ${cardData}`)

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
                {
                    cardData?.map((item: ICardData) => <Card key={item.id} id={item.id} description={item.description}
                                                             image={item.image} categoryId={item.categoryId}
                                                             name={item.name} tags={item.tags} url={item.url}/>)
                }
            </section>
        </div>
    )
}

export default HomePage