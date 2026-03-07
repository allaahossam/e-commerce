"use server"

import axios from "axios"
import { getMyToken } from "./auth/[...nextauth]/getMyToken"
import { revalidatePath } from "next/cache"



export async function updateCount(productId : string , count : number) {
    
     const token = await getMyToken()

    const {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        count:count 
    } , {
        headers:{
             token: `${token}`
        }
    })

    revalidatePath("/carts")
    return data


//     const {data} = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {method:"PUT" , count:count
//     }, {
        
//     })
// 
}