import {ICardData, ICategories} from "../models/models"

export interface ICardProps extends ICardData {
}

export interface ICategoriesProps {
    activeCategory: number
    isLoading: boolean
    data: ICategories[] | undefined
    onClickHandler: (id: number) => () => void
}