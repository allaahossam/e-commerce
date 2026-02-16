import React from 'react'

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import category from '@/app/api/catergory';

import Slider from './../Slider/Slider';
export default async function CategorySlider() {

    let data = await category()
    
    

    
    
  return (
    <>
    <h1 className=' pt-10 text-center text-2xl'>Shop Popular Categories</h1>
    <Slider data={data} />
    </>
  )
}
