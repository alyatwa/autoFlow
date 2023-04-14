import { ICtx } from "@/Types/ctx";
import { createContext } from "react";
import {initialState} from './CartProvider'

const CartContext = createContext<ICtx>(initialState)
export default CartContext;