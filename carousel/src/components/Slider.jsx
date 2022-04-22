import React from 'react'
import {useState} from "react"
import { SliderData } from './Sliderdata'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"

const Slider = () => {
    return (
        <div>
            <FaArrowAltCircleLeft className = "leftArrow"/>
            <FaArrowAltCircleRight className = "rightArrow"/>
            {SliderData.map((slide,data) => {
                return(
                    <img src = {slide.image} alt = "Slider Image"/>
                )
            })}
            
        </div>
    )
}

export default Slider
