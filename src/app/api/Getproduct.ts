export default async function getAllProducts(){
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/products` , {method:"GET"});
    let {data} = await  res.json();
   

    return data
}