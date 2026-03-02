
import axios from "axios";
import { getMyToken } from "./auth/[...nextauth]/getMyToken";

export default async function AddProduct(productId:string){

    const token = await getMyToken()
    console.log("TOKEN:", token)


    // const data = await axios.post(`https://ecommerce.routemisr.com/api/v2/cart` , {
    //     productId:productId,
    // }, {
    //     headers:{
    //         token:token as string
    //     }
    // })
    // console.log(data, "data fromapi");

    const data = await axios.post(`https://ecommerce.routemisr.com/api/v2/cart` , {
        productId:productId , 
    }, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    console.log("data fromapi" , data);
    


    

    // return data
}

    