
import axios from "axios";
import { getMyToken } from "./auth/[...nextauth]/getMyToken";

export default async function addProduct(productId:string){

    const token = await getMyToken()
    console.log("TOKEN:", token)



    const data = await axios.post(`https://ecommerce.routemisr.com/api/v2/cart` , {
        productId:productId , 
    }, {
        headers:{
            token: `${token}`
        }
    })

    


    

    return data
}

    