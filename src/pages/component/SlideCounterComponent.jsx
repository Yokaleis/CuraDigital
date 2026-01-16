import { React, useEffect, useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { FirstGroupSlide, SecondGroupSlide, ThirdGroupSlide, FourGroupSlide } from '../../components/Card/CardComponent'

const slides = [
    {
        slide1:<FirstGroupSlide/>,
    },
    {
        slide1:<SecondGroupSlide/>
    }
]
const slidesInterconsultas = [
    {
        slide1:<ThirdGroupSlide/>
    },
    {
        slide1: <FourGroupSlide/>
    },
]
export function SlideCounter() {

    const [currentIndex, setCurrentIndex] = useState(0);


    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    return (
     <>
     <div className='max-w-[900px] w-[900px] h-auto relative group'>
        <div>
            {slides[currentIndex].slide1}
        </div>
        
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer text-slate-300'>
                    <RxDotFilled/>     
                </div>
            ))}
        </div>    
     </div>
     
     </>   
    )
}
export function SlideCounterInterconsultas() {

    const [currentIndex, setCurrentIndex] = useState(0);


    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    return (
     <>
     <div className='max-w-[600px] w-[600px] h-auto relative group'>
        <div>
            {slidesInterconsultas[currentIndex].slide1}
        </div>
        
        <div className='flex top-4 justify-center py-2'>
            {slidesInterconsultas.map((slidesInterconsultas, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer text-slate-300'>
                    <RxDotFilled/>     
                </div>
            ))}
        </div>    
     </div>
     
     </>   
    )
}
