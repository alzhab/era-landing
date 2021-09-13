import React from "react";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";

import Go from "@assets/images/Go.svg";
import Java from "@assets/images/Java.svg";
import Python from "@assets/images/Python.svg";
import { FONTS } from "@assets/const";

export const Languages = observer(() => {
  const classes = useStyles();

  return (
    <section className={classes.languages}>
      <div className={"gradient-back"} />
      <div className="container">
        <div className={classes.languages__images}>
          <img src={Go} alt="" />
          <img src={Java} alt="" />
          <img src={Python} alt="" />
        </div>

        <div className={classes.languages__info}>
          <h3>
            Мы верим, что современный сайт невозможен без актуальных
            инструментов
          </h3>

          <p>
            Наши разработчики работают на одних из самых быстрых и безопасных
            языках программирования
          </p>
        </div>
      </div>
    </section>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  languages: {
    position: "relative",

    "& .container": {
      position: "relative",
      padding: "66px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "column-reverse",

      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
      },
    },
  },
  languages__images: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints.up("md")]: {
      width: "40%",
      marginTop: 0,
      justifyContent: "space-evenly",
    },

    "& > img": {
      width: "25%",
      maxWidth: 150,
      marginTop: 50,

      [theme.breakpoints.up("md")]: {
        width: "initial",
        marginTop: 0,
      },
    },
  },
  languages__info: {
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: "40%",
    },

    "& > h3": {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 18,
      lineHeight: "25px",
      marginBottom: 16,
      fontFamily: FONTS.medium,

      [theme.breakpoints.up("md")]: {
        fontSize: 24,
        lineHeight: "35px",
      },
    },

    "& > p": {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: "22px",

      [theme.breakpoints.up("md")]: {
        fontSize: 18,
        lineHeight: "27px",
      },
    },
  },
}));
