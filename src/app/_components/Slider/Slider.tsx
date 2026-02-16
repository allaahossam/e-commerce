'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function Slider({data}:any) {
   
    
  return <>
  
   <Swiper 
      spaceBetween={0}
      slidesPerView={7}
      modules={[Autoplay]}
      autoplay={{delay:2000}}
    >
        {data.map((product)=><SwiperSlide className='py-5'>

            <img src={product.image} alt="" className=' h-50 w-full' />
            <h2 className='text-center font-light text-lg'>{product.name}</h2>
      </SwiperSlide>)}

        
    </Swiper>
  </>
}
