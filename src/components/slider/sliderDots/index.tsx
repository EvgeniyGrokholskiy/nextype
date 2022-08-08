import React from "react"

import {ISliderDotProps} from "../../../types/types"


const SliderDots: React.FC<ISliderDotProps> = ({index, activeSlide}) => (
    <>
        {
            index === activeSlide
                ?
                <svg width="24" height="4" viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="4" fill="#2244CC"/>
                </svg>
                :
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.5" width="16" height="4" fill="#191928"/>
                </svg>
        }
    </>

)

export default SliderDots