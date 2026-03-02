import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

export default async function middleware(req:NextRequest) {


    const res = await getToken({req})

    console.log("res" , res);
    
    if(res){
         return NextResponse.next()

    }
    return NextResponse.redirect("http://localhost:3000/login")

 
}

export const config = {
    matcher : [ "/cart" , "/order" ]
}