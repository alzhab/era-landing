import React from "react";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";

import { FONTS } from "@assets/const";
import { Instagram, Telegram, Whatsapp } from "@components";

export const About = observer(() => {
  const classes = useStyles();

  return (
    <section className={classes.about} id="about">
      <div className="gradient-back" />

      <div className={classes.about__info}>
        <h2>Мы SetData</h2>

        <p>
          Мы создаем продукты, которые помогают нашим клиентам развиваться,
          расти и преобразовываться. Мы слушаем и понимаем перед тем, как
          проектировать. Мы вместе ставим цели и создаем эффективный и значимый
          продукт.
        </p>

        <div className={classes.about__links}>
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Whatsapp />
          </a>
          <a href="#">
            <Telegram />
          </a>
        </div>
      </div>
    </section>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  about: {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0",
    /* accent color */
  },
  about__info: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    "& h2": {
      // fontFamily: Circe,
      fontWeight: "bold",
      fontSize: 14,
      textTransform: "uppercase",
      marginBottom: 24,
      fontFamily: FONTS.bold,
    },

    "& p": {
      // fontFamily: 'Circe',
      fontSize: 18,
      lineHeight: "27px",
      margin: "24px 0px",
      fontFamily: FONTS.medium,
    },

    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
  },
  about__links: {
    marginTop: 164,
    display: "flex",
    alignItems: "center",
    "& a": {
      margin: "0 18px",
    },
  },
}));
