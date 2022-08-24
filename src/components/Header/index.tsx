import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ContextCart } from "../../../contextCart";
import { Cart } from "../Cart";
import { getCart } from "../util/storage";
import { Button } from "./ButtonCart";

import { HeaderContainer } from "./styles";

export const Header = () => {
  
  const { cartContextData, setCartContextData } = useContext(ContextCart);
  

  useEffect(() => {
    setCartContextData({
      items: getCart().numberItens,
    });
  }, [setCartContextData]);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <HeaderContainer>
      <div className="header-div-container">
        <div className="header-div-logo">
          <h1>MKS</h1>
          <h3>Sistemas</h3>
        </div>
        <div>
          <Button icon={FaShoppingCart} onClick={() => showSidebar()}>
          { cartContextData.items > 0 ? cartContextData.items : "0" }
          </Button>
        </div>
        {sidebar && <Cart active={setSidebar} />}
      </div>
    </HeaderContainer>
  );
};