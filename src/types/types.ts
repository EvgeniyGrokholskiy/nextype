import {ICardData, ICategories} from "../models/models"

export interface ICardProps extends ICardData {
}

export interface ICategoriesProps {
    activeCategory: number
    isLoading: boolean
    data: ICategories[] | undefined
    onClickHandler: (id: number) => () => void
}

export interface ISliderComponentProps {
    cardData: ICardData[] | undefined
    isLoadingCardData: boolean
}

export interface IButtonProps {
    className?: string
    style?: React.CSSProperties
    onClick?: () => void
}

export interface ISliderDotProps {
    index: number,
    activeSlide: number
}