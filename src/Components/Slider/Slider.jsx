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
  animation:  ${animations};
`;

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = SliderData .length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
    return (
        <div className='carousel'>
            <div className = "slider">
                <ArrowLeftIcon onClick={prevSlide} className='leftArrow'/>
                {SliderData.map((slide,index) => {
                    return(
                        <div  className={index === current ? 'slide active' : 'slide'}
                        key={nanoid()}>
                            
                            {index === current && (
                        <>
                            <img src={slide.image} alt='travel image' className='imageCarousel' />

                        </>)}
                        </div>
                    )
                })}
                
                <ArrowRightIcon onClick={nextSlide} className='rightArrow'/>
                
            </div>
            <div className='welcomDiv'>
                <h1>Welcome to eduBooks!</h1>
                <p style={{fontSize: "20px"}}>A place to browse and read ineresting books as well hang out with people...</p>
            </div>
        </div>
    )
}

export default Slider</div>
        </div>
    )
}

export default Slider
