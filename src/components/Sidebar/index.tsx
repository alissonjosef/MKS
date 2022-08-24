import { AiFillCloseCircle } from "react-icons/ai";
import { CardCart } from "../Cards/CardCart";
import { Container, Content } from "./styles";

export const Sidebar = ({ active, children }: any) => {
  const CloseSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <AiFillCloseCircle onClick={CloseSidebar} size={30} />
      <Content>
        <section className="cart_container-title">
          <h2>Carrinho de compras</h2>
        </section>
        <section className="cart_container-prod">
         <CardCart />
        </section>
        <section className="cart_container-bottom">
          <section className="cart_container-total">
            <h2>Total:</h2>
            <h2 className="cart_container-total-price">R$798</h2>
          </section>
          <button className="cart_container-button">Finalizar Compra</button>
        </section>
      </Content>
    </Container>
  );
};
