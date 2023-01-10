import styled from "styled-components";
export const InputsPage = styled.div`
  height: 100%;
  width: 100%;
  padding: 24px;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 820px) {
    align-items: center;
    text-align: left;
  }
`;
export const TextInput = styled.input`
  background-color: ${(props) => props.theme.item};
  border: 1px solid ${(props) => props.theme.fontColor};
  width: 327px;
  height: 48px;
  padding: 20px;
  color: ${(props) => props.theme.fontColor};
  &::-webkit-calendar-picker-indicator {
    opacity: 0.3;
  }
  &:focus {
    outline: none;
    border: 1px solid #7c5dfa;
  }
  @media screen and (min-width: 820px) {
    width: 350px;
  }
`;
export const NumberInput = styled.input`
  background-color: ${(props) => props.theme.item};
  border: 1px solid ${(props) => props.theme.fontColor};
  width: 327px;
  height: 48px;
  padding: 10px;
  color: ${(props) => props.theme.fontColor};
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    display: none;
  }
  &:focus {
    outline: none;
    border: 1px solid #7c5dfa;
  }
`;
export const BillParagraph = styled.p`
  color: #7c5dfa;
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: bold;
`;
export const Paragraph = styled.p`
  color: ${(props) => props.theme.fontColor};
  opacity: 0.7;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const Holder = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 330px;
  margin-top: 20px;
  margin-bottom: 20px;
  column-gap: 25px;
  @media screen and (min-width: 820px) {
    width: 350px;
    column-gap: 47px;
  }
`;
export const Title = styled.h1`
  font-size: 32px;
  color: ${(props) => props.theme.fontColor};
`;
export const Select = styled.select`
  width: 327px;
  height: 48px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${(props) => props.theme.item};
  border: 1px solid ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.fontColor};
  font-weight: bold;
  &:focus {
    outline: none;
    border: 1px solid #7c5dfa;
  }
  @media screen and (min-width: 820px) {
    width: 350px;
  }
`;
export const HolderItem = styled.div`
  display: grid;
  width: 327px;
  grid-template-columns: auto auto auto;
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 20px;
  padding-right: 30px;
  position: relative;
  @media screen and (min-width: 820px) {
    column-gap: 30px;
    width: 350px;
  }
`;
export const Holder2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const AddNewItem = styled.button`
  background-color: #7e88c3;
  color: #f9fafe;
  border-radius: 5px;
  width: 327px;
  height: 48px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  margin-top: 45px;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.7;
  }
  @media screen and (min-width: 820px) {
    width: 350px;
  }
`;
export const ButtonsHolder = styled.div`
  width: 327px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  @media screen and (min-width: 820px) {
    width: 350px;
  }
`;
export const CancelButton = styled.button`
  background-color: #7e88c3;
  color: #f9fafe;
  border-radius: 5px;
  width: 145px;
  height: 48px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  margin-right: 15px;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.7;
  }
`;
export const SaveButton = styled.button`
  background-color: #7c5dfa;
  color: #f9fafe;
  border-radius: 5px;
  width: 145px;
  height: 48px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.7;
  }
`;
export const Delete = styled.img`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  position: absolute;
  right: 0;
  top: 50px;
`;
export const HolderBack = styled.div`
  display: flex;
  align-items: center;
  align-self: left;
  width: 330px;
  margin-bottom: 20px;
  gap: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (min-width: 820px) {
    width: 350px;
  }
`;
export const ArrowImg = styled.img``;
