import { createContext, ReactNode, useState } from "react";
import { Product } from "../types/Product";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
  
}

export const UserContext = createContext<CartContextData>(
  {} as CartContextData
);

export const UserContextProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem("cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {};

  const removeProduct = (productId: number) => {};

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {};
  return (
    <UserContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </UserContext.Provider>
  );
};
