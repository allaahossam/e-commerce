"use client"

import { useContext } from "react"
import { cartContext } from "../_context/CartContext"
import Image from "next/image"
import Link from "next/link";
import { updateCount } from "../api/updateCount"
import { toast } from "sonner"
import { clearAllItems, deleteItem } from "../api/deleteItem";


export default function Cart() {


   const {cartData , numOfCartItems ,setcartData , setnumOfCartItems } =  useContext(cartContext)

   console.log(cartData );
   


   async function handleUpdateCount(productId :string , count :number ){

  toast.promise( updateCount(productId , count) , {
    success: function(res){
      setcartData(res.data)
    setnumOfCartItems(res.numOfCartItems)

    return "added sucssessfuly"
    },
    loading : "LOADING......" ,
    error : "ERRORRRRRR....." ,
    position : "top-center"
    
  } )
  


   }

   async function handleDeleteItem(productId:string) {
  
   toast.promise( deleteItem(productId) , {
    success : function(res){
      setcartData(res.data)
    setnumOfCartItems(res.numOfCartItems)

    return "Item deleted"
    },
     loading : "LOADING......" ,
    error : "ERRORRRRRR....." ,
    position : "top-center"

   })
   
   }

   async function handleClearItems() {
   const res = await clearAllItems()

   console.log(res);

   setcartData(null)
    setnumOfCartItems(0)
   
   }
 
  return (
    <>
    <h1>Cart page</h1>

    <div className="bg-gray-50 min-h-screen py-14 px-6">

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
       

          {/* Product Item */}
          {cartData?.data?.products?.map( (item)=> <div className="bg-white rounded-2xl border p-6 flex justify-between items-center hover:shadow-md transition">

            {/* Product Info */}
            <div className="flex items-center gap-6">

              <div className="bg-gray-100 p-3 rounded-xl">
                <Image
                  src={item?.product?.imageCover}
                  alt="women shawel"
                  width={96}
                  height={96}
                  className="w-20 h-20 object-contain"
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.product.title}
                </h3>

                <p className="text-sm text-gray-400">{item?.product?.brand?.name}</p>
                <p className="text-sm text-gray-400 mb-3">{item?.product?.category?.name}</p>

                {/* Quantity */}
                <div className="flex items-center border rounded-lg overflow-hidden w-fit">

                  <button  className="px-3 py-1 hover:bg-gray-100" onClick={()=> handleUpdateCount(item?.product?.id , item?.count-1)}>

                    
                    <i className="fa-solid fa-minus text-xs"></i>
                  </button>

                  <span className="px-4 font-medium">{item.count}</span>

                  <button className="px-3 py-1 hover:bg-gray-100" onClick={()=> handleUpdateCount(item?.product?.id , item?.count+1)}>
                    <i className="fa-solid fa-plus text-xs"></i>
                  </button>

                </div>
              </div>
            </div>

            {/* Price + Remove */}
            <div className="flex flex-col items-end gap-4">

              <span className="text-green-600 font-bold text-lg">
                ${item.price}
              </span>

              <button className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600" onClick={  ()=>  handleDeleteItem(item?.product?.id)}>
                <i className="fa-solid fa-trash"></i>
                Remove
              </button>

            </div>

          </div> )}

          {/* Continue / Clear */}
          <div className="flex justify-between items-center pt-4">

            <Link href="/">
                <button className="flex items-center gap-2 text-indigo-600 font-medium hover:underline">
                  <i className="fa-solid fa-arrow-left"></i>
                  Continue Shopping
                </button>
            </Link>
          
            <button className="flex items-center gap-2 border border-red-400 text-red-500 px-5 py-2 rounded-lg hover:bg-red-50 transition" onClick={handleClearItems}>
              
              <i className="fa-solid fa-trash"></i>
              Clear Cart
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-2xl border shadow-sm p-8 h-fit">

          <h2 className="text-xl font-semibold mb-6">
            Order Summary
          </h2>

          {/* Items */}
          <div className="flex justify-between text-gray-500 pb-4 border-b">
            <span>Total Items</span>
            <dt className="font-medium text-gray-700">{numOfCartItems}</dt>
          </div>

          {/* Price */}
          <div className="flex justify-between mt-6 text-lg font-semibold">
            <span>Total Price</span>
            <dd className="text-indigo-600">${cartData?.data?.totalCartPrice}</dd>
          </div>

          {/* Divider */}
          <div className="border-t mt-6 pt-6">

           <Link href="/payment">
  <button
    className="w-full py-3 rounded-xl text-white font-semibold
    bg-gradient-to-r from-indigo-500 to-purple-600
    hover:shadow-lg hover:scale-[1.02] transition"
  >
    Checkout
  </button>
</Link>

            <p className="text-xs text-gray-400 text-center mt-4">
              Taxes and shipping calculated at checkout
            </p>

          </div>

        </div>

      </div>
    </div>
    
    
    
    </>
  )
}
