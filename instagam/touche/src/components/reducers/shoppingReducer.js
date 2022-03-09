import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
    products: [
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

       {
        id:4,
        name: "kit de bordado",
        price: "150.000",
        image: "zkitdebordado.jpg"
      },
      {
        id:5,
        name: "Kit de RAINBOW",
        price: "150.000",
        image: "zkitderainbow.jpg"
      },
      {
        id:6,
        name: "Kit de RAINBOW",
        price: "150.000",
        image: "zkitderainbow.jpg"
      },
      
    
    ],
    cart:[],
};

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(
                (product) => product.id === action.payload);
            /*  console.log(newItem); */
            let itemInCart = state.cart.find(item=> item.id === newItem.id)
            return  itemInCart
                 ? {
                    ...state,
                    cart: state.cart.map((item) =>
                      item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    ),
                  }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                  }; 
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find((item) => item.id === action.payload);
            return itemToDelete.quantity > 1
            ? {
                ...state,
                cart: state.cart.map((item) =>
                  item.id === action.payload
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
              }
            : {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
              };
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
              };
        }
/* 
         case TYPES.TOTAL_SUM: {
      return accumalator + quantity * price;
    };
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };  }*/
       
 
        case TYPES.CLEAR_CART: 
          return shoppingInitialState;
        default:
            return state
    }

}