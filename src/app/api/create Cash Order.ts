"use server"
import axios from "axios";
import { getMyToken } from "./auth/[...nextauth]/getMyToken";

export type shippingAddressType = {
    shippingAddress :{
        details: string,
        phone:string,
        city:string,
    }
}

export async function createCashOrder(cartId: string , shippingAddress : shippingAddressType) {
     const token = await getMyToken()
    
     

     const{data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}` , {shippingAddress} , {
        headers:{
            token: `${token}`
        }
     })

     return data
}


export async function createVisaOrder(cartId: string , shippingAddress : shippingAddressType) {
    const token = await getMyToken()

    const {data} =await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,shippingAddress , {
        headers:{
            token: `${token}`
        }
    } )

    return data
}


