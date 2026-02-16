
import ProductDetails from "@/app/api/SpacificProduct";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";


export default async function Details({params}:any) {

 
    let {details} = await params
    

    let data = await ProductDetails(details);
    
    
  
    
  return (
    <div>
      <h1>product details</h1>
     <div className="container w-[80%] mx-auto">
       <div className="flex flex-wrap items-center">
        <div className='w-full md:w-1/4'> 
         <img  src={data?.imageCover} alt="" />
          <h2 className="font-mono font-semibold">{data.title}</h2>
          <p>{data.description}</p>
          <h4>{data?.category.name}</h4>
           <CardFooter className='flex justify-between items-center'>
              <p>{data.price} EGP</p>
              <p> <i className="fa-solid fa-star text-amber-300"></i>{data.ratingsAverage}</p>
            </CardFooter>
            <Button className="w-full bg-slate-700 hover:bg-slate-900" > <i className="fa-solid fa-plus"></i>Add To Cart</Button>
        </div>
      </div>
     </div>
      
    </div>
  )
}
