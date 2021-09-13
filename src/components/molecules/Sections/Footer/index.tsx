import React, { useContext } from "react";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";
import { FONTS } from "@assets/const";
import { Logo } from "@components";
import { AppContext, ThemeContext } from "@context";
import { ThemesTypes } from "@models/themes";

export const Footer = observer(() => {
  const {
    services: { staticService },
  } = useContext(AppContext);
  const { themeName } = useContext(ThemeContext);
  const classes = useStyles();

  const mainColor = themeName === ThemesTypes.light ? "#0A142F" : "#F2F2F2";
  const secondColor = themeName === ThemesTypes.light ? "#0A142F" : "#F2F2F2";

  return (
    <section className={classes.footer} id={"footer"}>
      <div className="container">
        <div className={classes.footer__top_row}>
          <div className={classes.footer__company}>
            <Logo size={"big"} />

            <h2
              className={classes.footer__address}
              style={{ color: mainColor }}
            >
              Тут будет адресс
            </h2>
          </div>

          <div className={classes.footer__links}>
            <ul className={classes.footer__list}>
              <li>
                <a style={{ color: secondColor }} href="#about">
                  О нас
                </a>
              </li>
              <li>
                <a style={{ color: secondColor }} href="#services">
                  Услуги
                </a>
              </li>
              <li>
                <a style={{ color: secondColor }} href="#">
                  Контакты
                </a>
              </li>
            </ul>

            <ul className={classes.footer__list}>
              <li>
                <a style={{ color: secondColor }} href={`https://wa.me/${""}`}>
                  Whatsapp
                </a>
              </li>
              <li>
                <a
                  style={{ color: secondColor }}
                  href={`https://telegram.me/${""}`}
                >
                  Telegram
                </a>
              </li>
              <li>
                <a style={{ color: secondColor }} href="#">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.footer__bottom_row}>
          <div className={classes.footer__contacts}>
            <a style={{ color: mainColor }} href={`tel:${staticService.phone}`}>
              {staticService.phone}
            </a>
            <a style={{ color: mainColor }} href="mailto:academy@setdata.kz">
              academy@setdata.kz
            </a>
          </div>

          <span
            style={{ color: secondColor }}
            className={classes.footer__copyright}
          >
            © 2021. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    "& .container": {
      padding: "90px 0 47px",
    },
  },
  footer__top_row: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  footer__bottom_row: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
  },
  footer__company: {
    display: "inline-flex",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 50,
    flexWrap: "wrap",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {
      width: "50%",
      marginBottom: 0,
      justifyContent: "flex-start",
    },
  },

  footer__address: {
    marginLeft: 0,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    fontFamily: FONTS.medium,
    color: "#0A142F",
    width: "100%",
    textAlign: "center",
    marginTop: 50,

    [theme.breakpoints.up("sm")]: {
      width: "initial",
      marginLeft: 53,
      textAlign: "left",
      marginTop: 0,
    },
  },
  footer__links: {
    display: "inline-flex",
    width: "100%",
    marginBottom: 50,

    [theme.breakpoints.up("md")]: {
      width: "50%",
      marginBottom: 100,
    },
  },
  footer__list: {
    width: "50%",

    "& > li": {
      marginBottom: 20,
      textAlign: "center",

      [theme.breakpoints.up("md")]: {
        textAlign: "left",
      },

      "& > a": {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: "20px",
        color: "#0A142F",
        opacity: 0.75,
      },
    },
  },
  footer__contacts: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 50,

    [theme.breakpoints.up("md")]: {
      width: "50%",
      marginBottom: 0,
    },

    "& > a": {
      display: "inline-block",
      textAlign: "center",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: "22px",
      color: "#0A142F",
      borderBottom: "1px solid #0081FE",
      fontFamily: FONTS.medium,

      "&:first-child": {
        marginBottom: 27,
      },
    },
  },
  footer__copyright: {
    width: "100%",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: "20px",
    color: "#0A142F",
    opacity: 0.65,
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      width: "50%",
      textAlign: "left",
    },
  },
}));
