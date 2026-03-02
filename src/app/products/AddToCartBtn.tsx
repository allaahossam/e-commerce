"use client"
import { Button } from '@/components/ui/button'
import AddProduct from '../api/Add Product To Cart'

export default function AddToCartBtn({productId} :{productId:string}) {

    async function handleBtn(){
      let data = await AddProduct(productId)
      console.log(data);
      
    }
  return <>
  
    <Button onClick={handleBtn} className=' bg-slate-700 hover:bg-slate-900'><i className="fa-solid fa-plus"></i>
    Add To Cart
    </Button>

  
  </>
}
