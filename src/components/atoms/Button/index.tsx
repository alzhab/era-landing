import React, { CSSProperties, FC, useContext } from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core";
import { FONTS } from "@assets/const";
import { ThemesTypes } from "@models/themes";
import { ThemeContext } from "@context";

export enum ButtonType {
  active = "active",
  inactive = "inactive",
}

interface IButtonProps {
  click?: () => void;
  type?: ButtonType;
  className?: any;
  style?: CSSProperties;
  padding?: Indents;
  margin?: Indents;
  disabled?: boolean;
}

interface Indents {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

type IndentType = "margin" | "padding";

const indent = (
  { top = 0, right = top, bottom = top, left = right }: Indents,
  type: IndentType
): any => ({
  [`${type}Top`]: top,
  [`${type}Right`]: right,
  [`${type}Bottom`]: bottom,
  [`${type}Left`]: left,
});

export const Button: FC<IButtonProps> = (props) => {
  const { themeName } = useContext(ThemeContext);
  const classes = useStyles();
  const type = props.type || ButtonType.active;
  const margin = indent(props.margin || {}, "margin");
  const padding = indent(props.padding || { right: 24 }, "padding");

  const configs = {
    [ThemesTypes.light]: {
      [ButtonType.active]: {
        background: "linear-gradient(92.71deg, #4A95FF 23.31%, #AC9BFF 73.76%)",
        color: "#FFFFFF",
      },
      [ButtonType.inactive]: {
        border: "1px solid #000000",
        color: "#000",
      },
    },
    [ThemesTypes.dark]: {
      [ButtonType.active]: {
        background: "linear-gradient(92.71deg, #4A95FF 23.31%, #AC9BFF 73.76%)",
        color: "#FFFFFF",
      },
      [ButtonType.inactive]: {
        border: "1px solid #fff",
        color: "#fff",
      },
    },
  };

  return (
    <div
      onClick={() => {
        if (props.click && !props.disabled) {
          props.click();
        }
      }}
      className={`${classes.button} ${type} ${props.className}`}
      style={{
        ...configs[themeName][type],
        ...margin,
        ...padding,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    height: 45,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FONTS.medium,

    // font-family: Circe;
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: 20,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
}));
