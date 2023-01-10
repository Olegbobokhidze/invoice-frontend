import { createGlobalStyle } from "styled-components";

interface ThemeProps {
  background: string;
  item: string;
  fontColor: string;
  boxShadow: string;
  iconTransition: string;
  iconTransform: string;
}
export const LightTheme: ThemeProps = {
  background: "#F8F8FB",
  item: "#FFF",
  fontColor: "#0C0E16",
  boxShadow: "rgb(72 84 159 / 25%) 0px 10px 20px;",
  iconTransition: "1.5s",
  iconTransform: "rotate(360deg)",
};
export const DarkTheme: ThemeProps = {
  background: "#141625",
  item: "#1E2139",
  fontColor: "#dfe3fa",
  boxShadow: "rgb(0 0 0 / 25%) 0px 10px 20px",
  iconTransition: "2.0s",
  iconTransform: "rotate(720deg)",
};
type GlobalThemeProps = {
  theme: ThemeProps;
};
export const GlobalStyle = createGlobalStyle<GlobalThemeProps>`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-family: 'League Spartan', sans-serif;
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        background-color: ${(props) => props.theme.background};
        
    }
`;
