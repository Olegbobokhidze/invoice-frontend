import React from "react";
import styled from "styled-components";
import Image from "../../assets/illustration-empty.svg";
const Ilustration = styled.img`
  scale: calc(1.5);
  @media screen and (min-width: 1440px) {
    scale: calc(2);
  }
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 100px;
  align-self: center;
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`;
const MainText = styled.h1`
  color: ${(props) => props.theme.fontColor};
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    font-size: 32px;
  }
`;
const Paragraph = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-size: 15px;
  opacity: 0.5;
  width: 200px;
  line-height: 1rem;
  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;
export const EmptyPage = () => {
  return (
    <Holder>
      <Ilustration src={Image} alt="empty img" />
      <MainText>There is nothing here.</MainText>
      <Paragraph>
        Create an invoice by clicking the <strong>New</strong> button and get
        started
      </Paragraph>
    </Holder>
  );
};
