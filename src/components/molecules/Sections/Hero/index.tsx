import React, { useContext } from "react";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";
import { FONTS, HEADER_HEIGHT } from "@assets/const";
import HandAndPhoneLight from "@assets/images/HandAndPhone-light.svg";
import HandAndPhoneDark from "@assets/images/HandAndPhone-dark.svg";
import { Button } from "@components";
import {AppContext, ThemeContext} from '@context';
import { ThemesTypes } from "@models/themes";

export const Hero = observer(() => {
  const { themeName } = useContext(ThemeContext);
  const {
    stores: { questionsStore },
  } = useContext(AppContext);
  
  const classes = useStyles();
  const imageConfig = {
    [ThemesTypes.dark]: HandAndPhoneDark,
    [ThemesTypes.light]: HandAndPhoneLight,
  };

  return (
    <section className={classes.hero}>
      <div className="container">
        <div className={classes.hero__info}>
          <span>Set Data Development -</span>
          <h1>
            эффективное решение <br className={classes.lineBreaker} /> для
            вашего бизнеса
          </h1>
          <p>
            Разработка сайтов и мобильных приложений{" "}
            <br className={classes.lineBreaker} /> на актуальных языках и
            фреймворках
          </p>

          <Button click={() => questionsStore.setModalOpen(true)} padding={{ right: 36 }} className={classes.button}>
            Рассчитать стоимость продукта
          </Button>
        </div>

        <img
          className={classes.hero__img}
          src={imageConfig[themeName]}
          alt=""
        />
      </div>
    </section>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    fontSize: 12,

    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
    },
  },
  lineBreaker: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "initial",
    },
  },
  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    marginTop: -HEADER_HEIGHT / 2,

    "& .container": {
      padding: "20px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100%",
    },
  },
  hero__info: {
    "& span": {
      // fontFamily: "Circe",
      fontSize: 14,
      textTransform: "uppercase",
      margin: "8px 0px",

      [theme.breakpoints.up("sm")]: {
        fontSize: 24,
      },
    },
    "& h1": {
      fontWeight: "bold",
      fontSize: 25,
      textTransform: "uppercase",
      margin: "8px 0px",
      fontFamily: FONTS.bold,

      [theme.breakpoints.up("sm")]: {
        fontSize: 48,
      },
    },
    "& p": {
      // fontFamily: 'Circe',
      fontWeight: 300,
      fontSize: 14,
      margin: "8px 0px",
      lineHeight: "27px",
      marginBottom: 36,
      fontFamily: FONTS.light,

      [theme.breakpoints.up("sm")]: {
        fontSize: 18,
      },
    },
  },
  hero__img: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));
