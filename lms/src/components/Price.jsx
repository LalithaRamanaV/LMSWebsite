import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Price = () => {
  return (
    <Container>
      <PriceCard price="" type="Insurances" />
      <PriceCard price="" type="Visa and Passport" />
      <PriceCard price="" type="All type of Cards" />
    
    </Container>
  );
};

export default Price;