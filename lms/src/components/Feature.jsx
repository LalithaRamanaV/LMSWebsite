import React from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`

  margin-top:30px;

  width: 100%;
  display: flex;
  
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: #3AAFA9;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image />
      </Left>
      <Right>
        <Title>
          <br />
          <b>What we do?</b>
        </Title>
        <SubTitle>Hi there! I am Leela Mohan</SubTitle>
        <Desc>
          we create Passport, VISA  Aadhar Cards 
        </Desc>
        <Desc>
        Star Health Insurance, LIC Insurance
        </Desc>
        <Desc>
        PAN cards and Aadhar cards
        </Desc>
        <Desc>
        All types governement and central governement cards.
        </Desc>
        <Desc>
          We guarantee you fast and accurate delivery within time.
        </Desc>
        <Button>Call Us</Button>
      </Right>
    </Container>
  );
};

export default Feature;