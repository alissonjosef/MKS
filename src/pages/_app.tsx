import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { CartContextData, ContextCart } from "../../contextCart";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../../styles/global";
import { CartProvider } from "../hooks/useCart";

function MyApp({ Component, pageProps }: AppProps) {
   const [cartContextData, setCartContextData] = useState<CartContextData>({
    items: 0,
  });

  return (
    /* <CartProvider>
    </CartProvider> */
    <ContextCart.Provider value={{ cartContextData, setCartContextData }}>
      <Component {...pageProps} />
    </ContextCart.Provider>
  );
}

export default MyApp;
