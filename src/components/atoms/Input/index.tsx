import React, { CSSProperties, FC, useContext } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { ThemeContext } from "@context";
import { themes, ThemesTypes } from "@models/themes";
import InputMask from "react-input-mask";

interface IInputProps {
  mask?: boolean;
  error?: string;
  rootStyle?: CSSProperties;
}

export const Input: FC<
  IInputProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
> = (props) => {
  const { themeName } = useContext(ThemeContext);
  const classes = useStyles();

  const background = {
    [ThemesTypes.light]: "#fff",
    [ThemesTypes.dark]: "#415B7D",
  };

  return (
    <div style={props.rootStyle}>
      {props.mask ? ( // @ts-ignore
        <InputMask
          {...props}
          style={{
            ...props.style,
            background: background[themeName],
            color: themes[themeName].color,
          }}
          className={`${classes.input} ${props.className}`}
          mask="+7 (999) 999 99-99"
          maskPlaceholder={"+7 (999) 999-99-99"}
          // @ts-ignore
          maskChar={null}
        />
      ) : (
        <input
          {...props}
          className={`${classes.input} ${props.className}`}
          style={{ ...props.style, background: background[themeName] }}
        />
      )}

      {!!props.error && (
        <p
          style={{
            position: "absolute",
            marginTop: 5,
            fontSize: 12,
            color: "#CD1729",
          }}
        >
          {props.error}
        </p>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    width: "100%",
    border: "none",
    padding: "12px 24px",
    background: "#FFFFFF",
    borderRadius: 20,

    [theme.breakpoints.up("md")]: {
      width: 313,
    },
  },
}));
