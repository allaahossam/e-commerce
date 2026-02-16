"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from "../../../../public/assets/images/slider-image-3.jpeg"
import img2 from "../../../../public/assets/images/banner-4.jpeg"
import img3 from "../../../../public/assets/images/blog-img-1.jpeg"
import sli1 from "../../../../public/assets/images/slider-image-1.jpeg"
import sli2 from "../../../../public/assets/images/slider-image-2.jpeg"
import  Image  from 'next/image';
import { Autoplay } from 'swiper/modules';


export default function Main() {
  return (
    <div className='container mx-auto w-[80%]'>

      <div className='flex'>
         <div className='w-3/4 '>
        <Swiper 
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{delay:2000}}
    >
      <SwiperSlide>
        <Image src={img1} className='h-[300] ' alt="uhfhv" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img2} className='h-[300]' alt="uhfhv" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img3} className='h-[300]' alt="uhfhv" />
      </SwiperSlide>
      
      
      
    </Swiper>

       </div>
       <div className='w-1/4'>

       <Image src={sli1} alt="jygv" className='h-[150] object-cover  ' />
       <Image src={sli2} alt="kjygf" className='h-[150] object-cover' />
       </div>
      </div>


    </div>
  )
}
