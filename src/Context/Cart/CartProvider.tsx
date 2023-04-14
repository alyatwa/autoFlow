import React from "react";
import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer, { sumItems } from "./CartReducer";
import { IProduct } from "@/Types/product";

type ProviderProps = { children: React.ReactNode };

const storage = (): IProduct[] => {
	if (typeof window !== "undefined") {
		return JSON.parse(localStorage.getItem("cartItems")!) || [];
	}

	return [];
};

export const initialState = {
	cartItems: storage(),
	...sumItems(storage()),
	checkout: false,
	addToCart: () => {},
	removeFromCart: () => {},
	decrease: () => {},
	increase: () => {},
	handleCheckout: () => {},
	clearCart: () => {},
};

const CartProvider = ({ children }: ProviderProps) => {
	const [state, dispatch] = useReducer(CartReducer, initialState);

	const addToCart = (payload: IProduct): void => {
		dispatch({ type: "ADD_TO_CART", payload });
	};

	const increase = (payload: IProduct) => {
		dispatch({ type: "INCREASE", payload });
	};

	const decrease = (payload: IProduct) => {
		dispatch({ type: "DECREASE", payload });
	};

	const removeFromCart = (payload: IProduct) => {
		dispatch({ type: "REMOVE_ITEM", payload });
	};

	return (
    
		<CartContext.Provider
			value={{
				...state,
				addToCart,
				removeFromCart,
				increase,
				decrease
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
