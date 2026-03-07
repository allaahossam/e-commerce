import React, { createContext, useEffect, useState } from 'react'
import { getLoggedCart } from '../api/getCartData';



export let cartContext = createContext({})

export default function CartContextProvider({children} : {children : React.ReactNode}) {


    const [cartData, setcartData] = useState(null);
    const [numOfCartItems, setnumOfCartItems] = useState(0);
    const [cartId, setcartId] = useState(null);



    async function getData() {
       const userCartData = await getLoggedCart()

       console.log("userCartData" , userCartData);

       setcartData(getData.data)
       setnumOfCartItems(getData.numOfCartItems)
       setcartId(getData.cartId)
       
    }
    useEffect(function(){
        getData()
    }, [])
    

  return <cartContext.Provider value={ {cartData,numOfCartItems,cartId,setcartData,setnumOfCartItems} }>


    {children}

  </cartContext.Provider>
}

