import React, { FC, useContext } from "react";
import LogoDark from "@assets/images/Logo-dark.svg";
import LogoLight from "@assets/images/Logo-light.svg";
import { ThemesTypes } from "@models/themes";
import { ThemeContext } from "@context";

interface ILogoProps {
  size: "small" | "big";
}

export const Logo: FC<ILogoProps> = (props) => {
  const { themeName } = useContext(ThemeContext);
  const config = {
    [ThemesTypes.light]: LogoLight,
    [ThemesTypes.dark]: LogoDark,
  };

  const sizeConfig = {
    small: { width: 60, height: 60 },
    big: { width: 100, height: 100 },
  };

  return <img style={sizeConfig[props.size]} src={config[themeName]} alt="" />;
};
