"use client"
import { Button } from '@/components/ui/button'
import addProduct from '../api/add Product To Cart';
import { toast } from 'sonner';
import { useContext } from 'react';
import { cartContext } from '../_context/CartContext';



export default function AddToCartBtn({productId} :{productId:string}) {


 const{setcartData ,setnumOfCartItems } =  useContext(cartContext)

    async function handleBtn(){
      let data = await addProduct(productId)
      console.log(data , "data from btn");

      if (data.data.status == "success") {
        toast.success(data.data.message , {position :'top-center'})
        setcartData(data.data)
        setnumOfCartItems(data?.data?.numOfCartItems)

      }else{
        toast.error("error" , {position : "top-center"})
      }
    }
  return <>
  
    <Button onClick={handleBtn} className=' bg-slate-700 hover:bg-slate-900'><i className="fa-solid fa-plus"></i>
    Add To Cart
    </Button>

  
  </>
}
