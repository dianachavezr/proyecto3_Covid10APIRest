
const Productitem = ({data, addToCart}) => {
    let {id, name, image, price} = data;
  return (
    <div style={{border:"thin solid gray", padding:"1rem"}}>
        Producto
        <h4>{name}</h4>
        <h3>{image}</h3>
        <h5>${price}COP</h5>
        <button onClick={() =>addToCart(id)} className="border-2 border-black px-2 bg-gray-300 hover:bg-gray-400 rounded"> Agregar </button>
    </div>
  )
}

export default Productitem