import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header/Header";
import { Main } from "./components/Main";
import { DarkTheme, GlobalStyle, LightTheme } from "./GlobalStyle";

function App() {
  const [theme, setTheme] = useState<string>("light");
  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <Header theme={theme} setTheme={setTheme} />
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;
