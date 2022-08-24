import { Cart } from "../../types/Cart";
import { Product } from "../../types/Product";

const cartID = "cart";

export const saveItemCart = (Item: Product) => {
  let cart = getCart();
  cart =
    Object.keys(cart).length === 0 ? { itens: [], numberItens: 0 } : getCart();

  cart.numberItens = cart.itens.push(Item);
  
  localStorage.setItem(cartID, JSON.stringify(cart));
};

export const getCart = () => {
  const str = localStorage.getItem(cartID) ?? "{}";
  return JSON.parse(str) as Cart;
};

export const getItensInCart = () => {
  const str = localStorage.getItem(cartID) ?? "{}";
  const cart = JSON.parse(str) as Cart;
  return cart.numberItens;
};

export const getNumberOfItemInCart = (obj: Product) => {
  const cartWithItens = getCart().itens;
  return cartWithItens.find((element) => element === obj) ?? 0;
};

export const removeItemCart = (obj: Product) => {
  if (getNumberOfItemInCart(obj) !== 0) {
    localStorage.removeItem(JSON.stringify(obj));
  }
};
