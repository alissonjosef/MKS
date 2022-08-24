import styled from "styled-components";

export const ListContainer = styled.div`
  .container-card {
  width: 250px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 2rem;
}
.card {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  align-items: center;
  padding: 20px 15px 10px 15px;
}
.photo img {
  height: 150px;
  padding-left: 2rem;
}
.container-name-price {
  text-align: left;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}
.name {
  padding-right: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2c2c2c;
}
.price {
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  height: 26px;
  padding: 5px;
  background: #373737;
  border-radius: 5px;
}
.description {
  margin-top: 10px;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #2c2c2c;
}
`
