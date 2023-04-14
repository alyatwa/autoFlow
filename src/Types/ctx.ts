import { IProduct } from "./product"


interface ICtx {
    addToCart: (payload: IProduct) => void
    removeFromCart: (payload: IProduct) => void
    increase: (payload: IProduct) => void
    decrease: (payload: IProduct) => void
    handleCheckout: (payload: IProduct) => void
    clearCart: (payload: IProduct) => void
    cartItems: IProduct[]
    itemCount: number
    total: string
  }

  export type {ICtx}