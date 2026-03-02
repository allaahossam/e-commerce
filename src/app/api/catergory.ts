import { getMyToken } from "./auth/[...nextauth]/getMyToken"

export default async function category(){
    getMyToken()
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`)
    let {data} = await res.json()
   return data
}

