import React from 'react'
import {useState} from "react"
import { SliderData } from './Sliderdata'
import "./Slider.css";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styled, { keyframes } from 'styled-components';
import { fadeIn,rollIn,bounceIn,fadeOut } from 'react-animations'
import { nanoid } from 'nanoid';

const animations = keyframes`${fadeOut}`;

const AnimatedDiv = styled.div`
  animation: 4s ${animations};
`;

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = SliderData .length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };

      setInterval(nextSlide,4000);
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
    return (
        <div className = "slider">
            <ArrowLeftIcon className='leftArrow'/>
            {SliderData.map((slide,index) => {
                return(
                    <AnimatedDiv  className={index === current ? 'slide active' : 'slide'}
                    key={nanoid()}>
                        
                        {index === current && (
                    <>
                        <img src={slide.image} alt='travel image' className='imageCarousel' />

                    </>)}
                    </AnimatedDiv>
                )
            })}
            
            <ArrowRightIcon className='rightArrow'/>
            
        </div>
    )
}

export default Slider