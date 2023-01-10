import React from "react";
import {
  Avatar,
  AvatarModeHolder,
  HeaderHolder,
  Line,
  Logo,
  LogoHolder,
  ModeImg,
} from "./Header.styled";
import AvatarImg from "../../assets/image-avatar.jpg";
import LogoImg from "../../assets/logo.svg";
import Sun from "../../assets/icon-sun.svg";
import Moon from "../../assets/icon-moon.svg";
type Theme = {
  theme: string;
  setTheme: (val: string) => void;
};
export const Header = ({ theme, setTheme }: Theme) => {
  return (
    <HeaderHolder>
      <LogoHolder>
        <Logo src={LogoImg} alt="logo" />
      </LogoHolder>
      <AvatarModeHolder>
        <ModeImg
          src={theme === "light" ? Moon : Sun}
          alt="mode img"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <Line />
        <Avatar alt="avatar image" src={AvatarImg} />
      </AvatarModeHolder>
    </HeaderHolder>
  );
};
