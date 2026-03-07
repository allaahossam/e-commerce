"use server"

import axios from "axios"
import { getMyToken } from "./auth/[...nextauth]/getMyToken"

export async function deleteItem(productId:string) {
    
     const token = await getMyToken()

     const{data}= await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers:{
            token: `${token}`
        }
     })
     return data
}


export async function clearAllItems() {

    const token = await getMyToken()

     const{data}= await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/`, {
        headers:{
            token: `${token}`
        }
     })
     return data
}