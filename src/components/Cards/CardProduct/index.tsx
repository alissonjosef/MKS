import { ListContainer } from "./style";

import { Product } from "../../../types/Product";
import { useContext } from "react";
import { ContextCart } from "../../../../contextCart";
import { useForm } from "react-hook-form";
import { getCart, saveItemCart } from "../../util/storage";
import CardButton from "../../CardButton";

type Props = {
  product: Product;
};

export function ListProducts({ product }: Props) {
  const { setCartContextData } = useContext(ContextCart);

  const { handleSubmit } = useForm();

  const onSubmit = () => {
    saveItemCart(product);

    let numberItens = getCart().numberItens++;
    setCartContextData({
      items: numberItens,
    });
  };

  return (
    <ListContainer>
      <div className="container-card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card">
            <div className="photo">
              <img src={product.photo} alt={product.name} />
            </div>
            <div className="container-name-price">
              <div className="name">{product.name}</div>
              <div className="price">R${product.price / 1}</div>
            </div>
            <div className="description">{product.description}</div>
          </div>
          <CardButton text="COMPRAR" />
        </form>
      </div>
    </ListContainer>
  );
}
