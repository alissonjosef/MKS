import { ButtonCard } from "./styles";
import { RiShoppingBag3Line } from "react-icons/ri";

type Props = {
  text: string;
};

function CardButton({ text }: Props) {
  return (
    <ButtonCard>
      <button className=" btn-bag" type="submit">
        <div className="container-button">
          <RiShoppingBag3Line size={19} />
          <div className="text-button">{text}</div>
        </div>
      </button>
    </ButtonCard>
  );
}

export default CardButton;
