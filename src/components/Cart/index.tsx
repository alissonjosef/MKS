import { useCart } from "../../hooks/useCart";
import { Product } from "../../types/Product";
import { CardCart } from "../Cards/CardCart";
import { Sidebar } from "../Sidebar";
import { formatPrice } from "../util/format";
import { CartContainer } from "./styles";

export const Cart = ({ active }: any) => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  /* const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.price),
  }));
 */
  /* const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return (sumTotal += product.price * product.price);
    }, 0)
  );

  function handleProductIncrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.price + 1 });
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.price - 1 });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }
 */

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <CartContainer>
      <Sidebar active={active} className="cart_container">
        <section className="cart_container-title">
          <h2>Carrinho de compras</h2>
        </section>
        <section className="cart_container-prod">
          {/* {cartFormatted.map((product) => (
            <>
              <li className="card_container">
                <figure>
                  <button className="card_container-close">X</button>
                  <img src={product.photo} alt="" />
                  <figcaption>apple-watch</figcaption>
                </figure>
                <section className="card_container-title">
                  <h3>{product.name}</h3>
                </section>
                <section className="card_container-info">
                  <div className="card_container-info-quant">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                  </div>
                  <div className="card_container-info-price">
                    <p>{product.price}</p>
                  </div>
                </section>
              </li>
            </>
          ))} */}
          <CardCart  />
          
        </section>
        <section className="cart_container-bottom">
          <section className="cart_container-total">
            <h2>Total:</h2>
            <h2 className="cart_container-total-price">R$798</h2>
          </section>
          <button className="cart_container-button">Finalizar Compra</button>
        </section>
      </Sidebar>
    </CartContainer>
  );
};
