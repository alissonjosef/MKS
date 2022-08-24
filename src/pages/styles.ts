import styled from "styled-components";

export const Container = styled.div`
  width: "100%";
  margin: 4rem;

  .row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center;
  }
`;
