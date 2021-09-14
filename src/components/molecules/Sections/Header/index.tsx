import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { IconButton, makeStyles, Switch, Theme } from "@material-ui/core";

import { FONTS, HEADER_HEIGHT } from "@assets/const";
import { AppContext, ThemeContext } from "@context";
import { themes, ThemesTypes } from "@models/themes";
import { Logo, SwitchBack } from "@components";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

export const Header = observer(() => {
  const {
    services: { staticService },
  } = useContext(AppContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { themeName } = useContext(ThemeContext);
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(themeName === ThemesTypes.dark);
  const { changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    changeTheme(darkMode ? ThemesTypes.dark : ThemesTypes.light);
  }, [darkMode]);

  return (
    <>
      <div
        className={classes.mobileMenu}
        style={{ transform: `translateX(${mobileMenuOpen ? 0 : "100%"})` }}
      >
        <IconButton
          onClick={() => setMobileMenuOpen(false)}
          style={{ position: "absolute", zIndex: 999, right: 10, top: 20 }}
        >
          <CloseIcon style={{ color: "#fff", fontSize: 35 }} />
        </IconButton>

        <ul className={classes.mobileMenu__links}>
          <li onClick={() => setMobileMenuOpen(false)}>
            <a href="#services">Услуги</a>
          </li>
          <li onClick={() => setMobileMenuOpen(false)}>
            <a href="#footer">Контакты</a>
          </li>
        </ul>

        <a
          onClick={() => setMobileMenuOpen(false)}
          href={`tel:${staticService.phone}`}
          className={classes.mobileMenu__phone}
        >
          {staticService.phone}
        </a>
      </div>

      <header className={classes.header}>
        <Logo size={"small"} />

        <nav className={classes.header__menu}>
          <ul className={classes.menu__links}>
            <li>
              <a style={{ color: themes[themeName].color }} href="#services">
                Услуги
              </a>
            </li>
            <li>
              <a style={{ color: themes[themeName].color }} href="#footer">
                Контакты
              </a>
            </li>
          </ul>

          <a
            href={`tel:${staticService.phone}`}
            className={classes.menu__phone}
            style={{ color: themes[themeName].color }}
          >
            {staticService.phone}
          </a>

          <div
            onClick={() => setDarkMode(!darkMode)}
            className={classes.switch}
          >
            <SwitchBack
              light={!darkMode}
              style={{ position: "absolute", zIndex: 1 }}
            />

            <div
              className={`${classes.switch__circle} ${
                darkMode ? classes.switch__moon : classes.switch__sun
              }`}
              style={{
                left: darkMode ? 54 - 15 - 4 : 4,
              }}
            >
              <span />
            </div>
          </div>

          <IconButton
            className={classes.burger}
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon
              style={{ color: themes[themeName].color, fontSize: 35 }}
            />
          </IconButton>
        </nav>
      </header>
    </>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    height: HEADER_HEIGHT,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",

    [theme.breakpoints.up("sm")]: {
      padding: "0 26px",
    },
  },
  header__menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  menu__links: {
    display: "none",
    alignItems: "center",
    fontFamily: FONTS.medium,

    "& li": {
      cursor: "pointer",
      "& a": {
        padding: "0 8px",
        fontSize: 16,
      },
    },

    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  menu__phone: {
    fontSize: 14,
    margin: 0,
    fontFamily: FONTS.medium,
    display: "none",

    [theme.breakpoints.up("sm")]: {
      margin: "0px 48px",
      fontSize: 16,
      display: "block",
    },
  },
  menu__switch: {
    display: "none",

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  switch: {
    position: "relative",
    width: 54,
    height: 23,
    cursor: "pointer",
  },
  switch__circle: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 15,
    height: 15,
    zIndex: 2,
    transition: "0.3s ease-out left",
  },
  switch__sun: {
    background: "rgba(255, 193, 135, 0.96)",
    boxShadow:
      "-3.9px 6.5px 5.2px rgba(183, 183, 183, 0.35), 0px 0px 11.7px rgba(255, 193, 135, 0.6), inset 0px -2.6px 5.2px #FFA149, inset 0px 2.6px 5.2px #FFD0A5",
    borderRadius: "78px",
  },
  switch__moon: {
    background: "#DEE5F3",
    boxShadow:
      "-3.9px 0px 19.5px rgba(183, 183, 183, 0.31), inset 0px -2.6px 5.2px #FFFFFF, inset 0px 2.6px 5.2px #BFBFC0",
    borderRadius: "78px",
  },
  mobileMenu: {
    position: "fixed",
    right: 0,
    left: 0,
    height: "100vh",
    zIndex: 999,
    background: "rgba(0,0,0,0.91)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flexDirection: "column",
    transition: "0.3s ease-out",
  },
  mobileMenu__links: {
    width: "100%",

    "& li": {
      width: "100%",
      cursor: "pointer",
      textAlign: "center",
      marginBottom: 30,

      "& a": {
        width: "100%",
        padding: "0 8px",
        fontSize: 25,
        color: "#fff",
        fontWeight: 700,
        textAlign: "center",
      },
    },
  },
  mobileMenu__phone: {
    width: "100%",
    padding: "0 8px",
    fontSize: 20,
    color: "#fff",
    fontWeight: 700,
    textAlign: "center",
  },
  burger: {
    display: "block",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
