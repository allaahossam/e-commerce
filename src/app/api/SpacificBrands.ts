export default async function getSpecificBrand(spacific){
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${spacific}` ,{method:"GET"})
    let {data} = await res.json()
    return data
}