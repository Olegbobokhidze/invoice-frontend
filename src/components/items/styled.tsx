import styled from "styled-components";

export const Holder = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  position: relative;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-radius: 8px;
  height: 80px;
  border: 1px solid ${(props) => props.theme.item};
  background-color: ${(props) => props.theme.item};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin-bottom: 15px;
  @media screen and (min-width: 820px) {
    height: 72px;
  }
  @media screen and (min-width: 1440px) {
    height: 102px;
  }
  cursor: pointer;
  :hover {
    border: 1px solid #7c5dfa;
    transition: 0.5s;
  }
`;
export const ID = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.fontColor};
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
export const DateP = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-size: 12px;
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
export const Price = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.fontColor};
  font-weight: bold;
  margin-top: 5px;
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
export const NameSurname = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.fontColor};
  font-weight: bold;
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
export const Paid = styled.div`
  background-color: rgba(51, 214, 159, 0.05);
  width: 80px;
  height: 25px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    height: 35px;
    width: 100px;
  }
`;
export const Pending = styled.div`
  background-color: rgba(255, 143, 0, 0.05);
  width: 80px;
  height: 25px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    height: 35px;
    width: 100px;
  }
`;
export const Draft = styled.div`
  background-color: rgba(223, 227, 250, 0.05);
  width: 80px;
  height: 25px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    height: 35px;
    width: 100px;
  }
`;
export const DatePriceHolder = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const Paragraph = styled.p`
  font-weight: bold;
  opacity: 1;
`;
export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;
export const Arrow = styled.img`
  position: absolute;
  right: 40px;
  scale: calc(2);
`;
