import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";
import { TYPES } from "./actions/shoppingAction";
import CartItem from "./CartItem";
import Productitem from "./Productitem";
import { shoppingReducer, shoppingInitialState } from "./reducers/shoppingReducer";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const {products, cart} =state;

  const addToCart = (id) => {
      /* console.log(id);  */
      dispatch({type:TYPES.ADD_TO_CART, payload:id});
  }
  const delFromCart = (id, all=false) => {
    console.log(id,all);
    if(all){
      dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id});
    } else {  dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})}

  }

/*   const totalSum = () => {
    dispatch({type:TYPES.TOTAL_SUM, payload:price})
    const totalSum = () => {
      const reducer = (accumalator, currentValue) => {
        const { quantity, price } = currentValue;
  } */
  
  const clearCart = () => {
    dispatch({type:TYPES.CLEAR_CART})
  }

  return (
    <div>
        <h2>Carrito De Compra</h2>
        <h3>Productos</h3>
        <article className='box grid-responsive'>
            {products.map((product)=> ( 
              <Productitem key={product.id} image={product.image} data={product} addToCart={addToCart}/> 
            ))}
             
         </article>
        <h3>Carrito</h3>
        <article className='box flex flex-col gap-4'>
        <button className="border-2 border-black px-2 bg-gray-300 hover:bg-gray-400 rounded" onClick={clearCart}> Limpiar Carrito </button> 
        {cart.map((item, index)=> 
          <CartItem key={index} data={item} delFromCart={delFromCart} />
          )}   
{/*         <button className="border-2 border-black px-1 bg-gray-300 hover:bg-gray-400 rounded" onClick={() => totalSum(price)} >Total</button> 
 */}        </article>
    </div>
  );
};

export default ShoppingCart;