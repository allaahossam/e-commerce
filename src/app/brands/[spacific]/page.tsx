import getSpecificBrand from '@/app/api/SpacificBrands';


export default async function SpacificBrand({params}) {

    let {spacific} = await params

    let data = await getSpecificBrand(spacific)
    
    
  return (
    <div>
      <h1>brandsssssssss</h1>

      <div className=''>
        <img src={data.image} alt={data.name} />
        <h2>{data.name}</h2>

      </div>


    </div>
  )
}
