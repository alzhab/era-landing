import React from "react";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";
import { Heading } from "@components";
import FingersRight from "@assets/images/FingersRight.svg";
import { FONTS } from "@assets/const";

const useStyles = makeStyles((theme: Theme) => ({
  reasons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "90%",
    margin: "0 auto",
    paddingBottom: 72,

    [theme.breakpoints.up("lg")]: {
      padding: "48px 0 92px 64px",
      width: "100%",
    },
  },
  reasons__info: {
    marginTop: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reasons__img: {
    display: "none",

    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  reasons__list: {
    width: "100%",

    [theme.breakpoints.up("lg")]: {
      width: "70%",
    },
  },
  reasons__item: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 48,

    [theme.breakpoints.up("md")]: {
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      marginBottom: 24,
    },

    "& > h2": {
      /* h2 */
      // fontFamily: Circe;
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 24,
      width: 180,
      fontFamily: FONTS.medium,
    },

    "& > span": {
      height: 1,
      width: 80,
      margin: "20px 0",

      [theme.breakpoints.up("md")]: {
        margin: 0,
      },
    },

    "& > p": {
      // font-family: Circe;
      width: 500,
      maxWidth: "100%",
      fontSize: 16,
      lineHeight: "24px",
    },
  },
}));

export const Reasons = observer(() => {
  const classes = useStyles();

  return (
    <section className={classes.reasons} id="reasons">
      <Heading title={"Почему мы?"} />

      <div className={classes.reasons__info}>
        <div className={classes.reasons__list}>
          <div className={classes.reasons__item}>
            <h2>Гарантия</h2>
            <span />
            <p>
              Мы уверены в нашем качестве и продолжаем поддерживать ваш проект и
              после реализации в{" "}
              <span style={{ color: "red" }}>течении 3 месяцев</span>
            </p>
          </div>

          <div className={classes.reasons__item}>
            <h2>Дизайн</h2>
            <span />
            <p>
              Каждый наш дизайн разрабатывается индивидуально, чтобы подчеркнуть
              ваши идеи и наиболее выгодно представить ваше дело
            </p>
          </div>

          <div className={classes.reasons__item}>
            <h2>Аналитика</h2>
            <span />
            <p>
              Прежде чем приступить к работе, наша команда анализирует рынок
              вместе с вами и предлагает решение, как сделать бизнес эффективнее
            </p>
          </div>

          <div className={classes.reasons__item}>
            <h2>Тестирование</h2>
            <span />
            <p>
              Тестирование продукта является необходимой составляющей
              разработки, оно позволяет устранить недостатки и улучшить
              конверсию
            </p>
          </div>
        </div>

        <img src={FingersRight} alt="" className={classes.reasons__img} />
      </div>
    </section>
  );
});
