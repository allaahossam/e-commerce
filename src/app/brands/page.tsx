import Link from 'next/link';
import React from 'react'

export default async function Brands() {

  let res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`)

  let {data} = await res.json()
  
  return (
   <>
   <h1>Brandsssssss</h1>
   <div className='container mx-auto  md:w-[80%] pt-10'>
    <div className='flex flex-wrap '>
      {data.map((product)=>{
    return <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 py-2'>
     
     <Link href={`/brands/${product._id}`}>
     
      <div >
      <img src={product?.image} alt="" />
      <h2 className='text-center font-light font-serif  bg-gradient-to-r from-[#4caf4fbb] to-[#ff9900c0] bg-clip-text text-transparent text-2xl '>{product.name}</h2>
    </div>
     </Link>
      
     
    </div>
   })}
   
    </div>
   </div>
   
   </>
  )
}
