import { IProduct } from "@/Types/product.js";
import {
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE,
  DECREASE
} from "./CartTypes";
import { ICtx } from "@/Types/ctx";

const Storage = (cartItems: IProduct[]) => {
  if (typeof window !== 'undefined') //Next server ignore
  {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
}
};

export const sumItems = (cartItems: IProduct[]) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

const CartReducer = (
  state: ICtx,
  action: { type: any; payload?: any }
) : ICtx => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.cartItems.find((item) => item.id === action.payload!.id)) {
        state.cartItems.push({
          ...action.payload!,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    
    case REMOVE_ITEM:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload!.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload!.id),
        ],
      };
    
    case INCREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload!.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case DECREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload!.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    default:
      return state;
  }
};

export default CartReducer;