import Slider from "react-slick"
import React, {useState} from "react"

import "./slider.scss"
import Card from "../card"
import SliderDots from "./sliderDots"
import {ICardData} from "../../models/models"
import CardSkeleton from "../card/cardSkeleton"
import {NextButton, PrevButton} from "./sliderArrows"
import {ISliderComponentProps} from "../../types/types"


const SliderComponent: React.FC<ISliderComponentProps> = ({cardData, isLoadingCardData}) => {

    const [activeSlide, setActiveSlide] = useState(0)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: (cardData && cardData?.length < 2 ? 1 : 4),
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextButton/>,
        prevArrow: <PrevButton/>,
        beforeChange: (currentSlide: number, nextSlide: number) => {
            setActiveSlide(nextSlide)
        },
        customPaging: (index: number) => {
            return (
                <div>
                    <SliderDots index={index} activeSlide={activeSlide}/>
                </div>
            )
        },
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 740,
                settings: {
                    accessibility: false,
                    dots: true,
                    slidesToShow: 1,
                    nextArrow: <></>,
                    prevArrow: <></>
                }
            }
        ]
    }

    const slidesToRender = cardData?.map((card: ICardData) => (
        <div key={card.id}>
            <Card id={card.id} categoryId={card.categoryId} name={card.name} image={card.image}
                  description={card.description} url={card.url} tags={card.tags}/>
        </div>
    ))

    if (isLoadingCardData) {
        return (
            <Slider {...settings}>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
            </Slider>
        )
    }

    if (cardData && cardData?.length === 1) {
        return (
            <div>
                {slidesToRender}
            </div>
        )
    }

    return (

        <>
            {
                cardData?.length === 0 && <h2>{"Нет статей((("}</h2>
            }
            <Slider {...settings}>
                {
                    slidesToRender
                }
            </Slider>
        </>
    )
}

export default SliderComponent