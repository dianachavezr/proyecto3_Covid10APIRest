import React from 'react'
import Cardprincipal from './Cardprincipal'


export const Cardsprincipal = (props) => {
  const productos = [

     {
        id:1,
        name: "kit de bordado",
        price: "150.000",
        image: "zkitdebordado.jpg"
      },
      {
        id:2,
        name: "Kit de RAINBOW",
        price: "150.000",
        image: "zkitderainbow.jpg"
      },
      {
        id:3,
        name: "portabastidor",
        price: "150.000",
        image: "zportabastidor.jpg"
       }, 
        
    ]
  
  
  
    return (
    <div className='Cards'> 
    {
    productos.map(producto => (
    <Cardprincipal name={producto.name} price={producto.price} image={producto.image} />
    ))
    }
    </div>
    
  )
}
export default Cardsprincipal