import styled from "styled-components";

export const HeaderHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: #1e2139;
  padding-right: 20px;
  z-index: 999;
  @media screen and (min-width: 1440px) {
    position: fixed;
    width: 120px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-right: 0px;
    padding-bottom: 30px;
    border-top-right-radius: 20px;
  }
`;
export const AvatarModeHolder = styled.div`
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1440px) {
    height: 150px;
    flex-direction: column;
  }
`;
export const Line = styled.hr`
  background-color: #494e6e;
  opacity: 0.1;
  height: 120px;
  @media screen and (min-width: 1440px) {
    width: 120px;
    height: 0px;
  }
`;
export const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
  height: 50px;
`;
export const LogoHolder = styled.div`
  background-color: #7c5dfa;
  width: 120px;
  height: 120px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img`
  scale: calc(1.5);
`;
export const ModeImg = styled.img`
  cursor: pointer;
  scale: calc(1.5);
  transition: ${(props) => props.theme.iconTransition};
  transform: ${(props) => props.theme.iconTransform};
  &:hover {
    opacity: 0.8;
  }
`;
