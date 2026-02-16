
import Image from "next/image";
import  Main  from "./_components/MainSlider/Main";
import CategorySlider from "./_components/CategorySlider/CategorySlider";
import ProductSlider from "./_components/ProductSlider/ProductSlider";





export default function Home() {
  return (
   <>

   
    <Main/>
    <CategorySlider/>
    <ProductSlider/>
   
   </>
  );
}
