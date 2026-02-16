import getAllProducts from '@/app/api/Getproduct'
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"


import Link from 'next/link';

export default async function ProductSlider() {

    let data = await getAllProducts()
    
  return <>
  
  <div className='container mx-auto  md:w-[80%] pt-10 '>
      <div className='flex flex-wrap '>
        {data.map( (product:any)=>{
      return <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-2 '>
        <Link href={`/products/${product._id}`}>
        <Card className='flex  gap-x-2 gap-y-3'>
            <CardHeader>
              <CardTitle><img src={product.imageCover} alt="" /></CardTitle>
              <CardDescription>{product?.category?.name}</CardDescription>
              
            </CardHeader>
            <CardContent>
              <p className='line-clamp-1 font-bold'>{product.title}</p>
            </CardContent>
            <CardFooter className='flex justify-between items-center'>
              <p>{product.price}</p>
              <p> <i className="fa-solid fa-star text-amber-300"></i>{product.ratingsAverage}</p>
            </CardFooter>
            <Button className=' bg-slate-700 hover:bg-slate-900'> <i className="fa-solid fa-plus"></i>Add To Cart</Button>
        </Card>
        </Link>
      </div>

      
        
      
    } )}
      </div>
    </div>
  
  </>
}
