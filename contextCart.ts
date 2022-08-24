import { createContext, ReactNode } from "react";

interface CartProviderProps {
  children: ReactNode;
}

export type CartContextData = {
  items: number;
};

export type CartContextType = {
  cartContextData: CartContextData;
  setCartContextData: (cartContextData: CartContextData) => void;
};

const initial = {
  cartContextData: {
    items: 0,
  },
  setCartContextData: () => null,
}

export const ContextCart = createContext<CartContextType>(initial);



