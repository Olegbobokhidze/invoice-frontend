import styled from "styled-components";
export const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 15px;
  flex-direction: column;
`;
export const HeaderHolder = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  padding: 30px;
  border-radius: 10px;
  position: relative;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.item};
  box-shadow: ${(props) => props.theme.boxShadow};
  @media screen and (min-width: 820px) {
    height: 150px;
    border-radius: 15px;
  }
`;
export const Paragraph = styled.p`
  color: ${(props) => props.theme.fontColor};
  opacity: 0.7;
`;
export const Button = styled.button`
  color: white;
  width: 73px;
  height: 48px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    opacity: 0.7;
  }
  &:focus {
    outline: none;
  }
`;
export const Invoice = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.item};
  padding: 25px;
  margin-top: 25px;
  border-radius: 10px;
  @media screen and (min-width: 820px) {
    border-radius: 15px;
  }
`;
export const IdProjectHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap: 5px;
  @media screen and (min-width: 820px) {
    display: grid;
    grid-template-columns: auto auto;
    margin-bottom: 30px;
  }
`;
export const HolderFrom = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap: 5px;
  @media screen and (min-width: 820px) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 15px;
    margin-bottom: 30px;
  }
`;
export const HolderToItems = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 15px;
  @media screen and (min-width: 820px) {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 15px;
    margin-bottom: 10px;
  }
`;
export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const HolderMail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const BoldText = styled.h1`
  color: ${(props) => props.theme.fontColor};
  font-size: 22px;
`;
export const TotalHolder = styled.div`
  background-color: #0c0e16;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  border-radius: 10px;
`;
export const ArrowBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  top: 30px;
  left: 30px;
  position: absolute;
  &:hover {
    opacity: 0.7;
  }
`;
export const ArrowLeft = styled.img`
  scale: calc(1.5);
`;
export const ButtonsHolder = styled.div`
  display: grid;
  align-items: center;
  margin-top: 30px;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (min-width: 820px) {
    column-gap: 50px;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 0px;
    justify-items: center;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 50px;
    align-items: center;
    justify-items: center;
  }
`;
