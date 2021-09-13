import React, { FC, useContext } from "react";
import { themes } from "@models/themes";
import { makeStyles, Theme } from "@material-ui/core";
import { ThemeContext } from "@context";

interface IRadioProps {
  value: string;
  activeValue?: string;
  onChange: (value: string) => void;
  label: string
}

export const Radio: FC<IRadioProps> = (props) => {
  const { themeName } = useContext(ThemeContext);
  const classes = useStyles();

  return (
    <div
      className={classes.card__answer}
      onClick={() => {
        if (props.value !== props.activeValue) {
          props.onChange(props.value);
        }
      }}
    >
      <span
        style={{ border: `1px solid ${themes[themeName].color}` }}
        className={props.activeValue === props.value ? "active" : ""}
      />

      <p>{props.label}</p>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  card__answer: {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    cursor: "pointer",

    "& > span": {
      minWidth: 18,
      minHeight: 18,
      maxWidth: 18,
      maxHeight: 18,
      borderRadius: "50%",

      "&.active": {
        border: "none !important",
        backgroundColor: "#0093D1",
      },
    },

    "& > p": {
      marginLeft: 48,
      fontSize: 16,
      lineHeight: "24px",
    },
  },
}));
