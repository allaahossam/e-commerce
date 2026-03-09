"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import {Button} from "@/components/ui/button"
import { signOut, useSession } from 'next-auth/react'
import { cartContext } from '@/app/_context/CartContext'

export default function Navbar() {

    let session = useSession()

    console.log("session",session);

    function handleSignout(){

        signOut({redirect:true , callbackUrl : "/login"})

    }

    const{numOfCartItems}= useContext(cartContext)
    
  return (
    <>
    
        <nav>
        
            <div className="container py-2 w-full md:w-[80%] mx-auto flex justify-between items-center">
            <div className='left '>
                <ul className='flex gap-4  items-center'>
                    <li className=' text-3xl font-semibold bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent' ><Link href="/"> <i className="fa-solid fa-cart-shopping font-semibold bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent"></i> FreshCart</Link></li>
                    <li className='font-light font-serif  bg-gradient-to-r from-[#4CAF50] to-[#FF9800] bg-clip-text text-transparent'><Link href="/">Home</Link></li>

                    <li className='font-light font-serif bg-gradient-to-r from-[#4CAF50] to-[#FF9800] bg-clip-text text-transparent relative'>
                        <span className='bg-red-500 text-white text-sm absolute p-1 rounded-2xl -right-2 -top-5'>{numOfCartItems}</span>
                        
                        
                        <Link href="/cart">Cart</Link>
                        
                        
                        </li>

                    <li className='font-light font-serif bg-gradient-to-r from-[#4CAF50] to-[#FF9800] bg-clip-text text-transparent'><Link href="/products">Products</Link></li>
                    <li className='font-light font-serif bg-gradient-to-r from-[#4CAF50] to-[#FF9800] bg-clip-text text-transparent'><Link href="/categories">Categories</Link></li>
                    <li className='font-light font-serif bg-gradient-to-r from-[#4CAF50] to-[#FF9800] bg-clip-text text-transparent'><Link href="/brands">Brands</Link></li>
                    
                </ul>
            </div>
            <div className='right'>
                <ul className='flex items-center gap-3 '>
                    <i className="fa-brands fa-instagram  bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] bg-clip-text text-transparent  hover:scale-210"></i>
                    <i className="fa-brands fa-facebook text-[#1877F2]  hover:scale-210"></i>
                    <i className="fa-brands fa-tiktok  hover:scale-210"></i>
                    <i className="fa-brands fa-linkedin  text-[#0A66C2] hover:scale-210"></i>
                    <div className="  bg-[#FF0000] flex items-center justify-center">
                        <i className="fa-brands fa-youtube text-white hover:scale-210 "></i>
                    </div>


                    {session.data ? <li><Button onClick={handleSignout}>SignOut</Button></li> : <>
                    
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/register">Register</Link></li>
                    
                    </> }
                    
                    

                </ul>
            </div>
        </div>
        
    </nav>
    
    </>
  )
}
