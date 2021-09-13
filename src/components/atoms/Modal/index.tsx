import React, { FC, useCallback, useContext } from "react";
import { themes, ThemesTypes } from "@models/themes";
import { makeStyles, Theme } from "@material-ui/core";
import { ThemeContext } from "@context";

interface IModalProps {
  open: boolean;
  close: () => void;
}

export const Modal: FC<IModalProps> = (props) => {
  const classes = useStyles();
  const { themeName } = useContext(ThemeContext);

  const modalClickHandler = useCallback(
    (e: any) => {
      if (e.target["id"] === "modal") {
        props.close();
      }
    },
    [props.close]
  );

  const modalConfigStyles = {
    [ThemesTypes.light]: { backgroundColor: "rgba(0, 0, 0, 0.3)" },
    [ThemesTypes.dark]: { backgroundColor: "rgba(255,255,255,0.2)" },
  };

  return props.open ? (
    <div
      id={"modal"}
      style={modalConfigStyles[themeName]}
      onClick={modalClickHandler}
      className={classes.modal}
    >
      <div
        className={classes.card}
        style={{ backgroundColor: themes[themeName].backgroundColor }}
      >
        {props.children}
      </div>
    </div>
  ) : null;
};

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    zIndex: 999,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    padding: 36,
    width: "90%",
    maxWidth: 870,
    position: "relative",
  },
  card__header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,

    "& > p": {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: "24px",
    },
  },
  card__progress: {
    width: "100%",
    height: 4,
    backgroundColor: "#C4C4C4",

    "& > div": {
      height: "100%",
      backgroundColor: "#0093D1",
    },
  },
  card__body: {
    marginTop: 36,
    marginBottom: 16,
  },
  card__footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  back_button: {
    background: "#E2E2E2",
    boxShadow: "none",
    color: "#5E5E5E",
  },
}));
