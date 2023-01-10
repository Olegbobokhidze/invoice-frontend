import styled from "styled-components";

export const HeaderHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
`;
export const Holder = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonFilterDiv = styled.div`
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media screen and (min-width: 820px) {
    width: 300px;
  }
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
  font-size: 32px;
`;
export const Paragraph = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-weight: bold;
  font-size: 12px;
`;
export const Button = styled.button`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 48px;
  background-color: #7c5dfa;
  border-radius: 24px;
  color: #fff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const PlusImg = styled.img``;
export const PlusDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
`;
type ArrowT = {
  showStatus: boolean;
};
export const ArrowImg = styled.img<ArrowT>`
  scale: calc(1.5);
  margin-left: 10px;
  cursor: pointer;
  rotate: ${(props) => (props.showStatus === true ? "-180deg" : null)};
  transition: 0.6s;
`;
export const ArrowParagraphHolder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ParagraphMobile = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 820px) {
    display: none;
  }
`;
export const ParagraphDesktop = styled.p`
  display: none;

  @media screen and (min-width: 820px) {
    display: flex;
    color: ${(props) => props.theme.fontColor};
    font-weight: bold;
    font-size: 12px;
  }
`;
