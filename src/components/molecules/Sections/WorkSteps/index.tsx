import React from "react";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";
import { Heading } from "@components";

import Step1 from "@assets/images/Step1.svg";
import Step2 from "@assets/images/Step2.svg";
import Step3 from "@assets/images/Step3.svg";
import Step4 from "@assets/images/Step4.svg";
import Step5 from "@assets/images/Step5.svg";
import Step6 from "@assets/images/Step6.svg";

const Dots = () => (
  <svg
    width="70"
    height="11"
    viewBox="0 0 70 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83081 5.06421C64.2879 5.30048 5.83081 5.06421 64.2879 5.30054"
      stroke="url(#linear)"
      strokeWidth="5"
      strokeLinecap="round"
      strokeDasharray="1 25"
    />
    <defs>
      <linearGradient
        id="linear"
        x1="14.8832"
        y1="-7.97276"
        x2="41.1249"
        y2="-17.145"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4A95FF" />
        <stop offset="1" stopColor="#AC9BFF" />
      </linearGradient>
    </defs>
  </svg>
);

const Done = () => (
  <svg
    width="68"
    height="55"
    viewBox="0 0 68 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.5649 54.1052C22.8769 54.1052 20.2871 53.0547 18.3529 51.1536L1.52455 34.6169C0.497908 33.608 0.483657 31.9579 1.49248 30.9317C2.50131 29.9051 4.15147 29.8903 5.17811 30.8992L22.006 47.4359C23.0621 48.4737 24.5138 48.9985 25.9894 48.8758C27.4649 48.7527 28.8102 47.9953 29.6801 46.7971L62.7454 1.25738C63.5908 0.0928049 65.2206 -0.165764 66.3852 0.679675C67.5498 1.52562 67.8083 3.15542 66.9629 4.32L33.8976 49.8592C32.1355 52.2861 29.4108 53.8207 26.422 54.0696C26.1359 54.0935 25.8494 54.1052 25.5649 54.1052V54.1052Z"
      fill="url(#linear)"
    />
    <defs>
      <linearGradient
        id="linear"
        x1="18.0495"
        y1="-17.0974"
        x2="53.1792"
        y2="-15.0371"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4A95FF" />
        <stop offset="1" stopColor="#AC9BFF" />
      </linearGradient>
    </defs>
  </svg>
);

export const WorkSteps = observer(() => {
  const classes = useStyles();

  return (
    <section className={classes.steps}>
      <div className="container">
        <Heading title={"Этапы работы"} />

        <div className={classes.steps__info}>
          <div className={classes.step__item}>
            <img src={Step1} alt="" />

            <p>Составление ТЗ и расчет цены</p>

            <Dots />
          </div>

          <div className={classes.step__item}>
            <img src={Step2} alt="" />

            <p>Заключение договора</p>

            <Dots />
          </div>

          <div className={classes.step__item}>
            <img src={Step3} alt="" />

            <p>Сбор информации и анализ</p>

            <Dots />
          </div>

          <div className={classes.step__item}>
            <img src={Step4} alt="" />

            <p>Реализация</p>

            <Dots />
          </div>

          <div className={classes.step__item}>
            <img src={Step5} alt="" />

            <p>Тестирование</p>

            <Dots />
          </div>

          <div className={classes.step__item}>
            <img src={Step6} alt="" />

            <p>Сдача заказа</p>

            <Done />
          </div>
        </div>
      </div>
    </section>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  steps: {
    "& .container": {
      paddingTop: "70px",
      paddingBottom: "100px",
      display: "flex",
      flexDirection: "column",
    },
  },
  steps__info: {
    flex: 1,
    alignItems: "flex-start",
    display: "flex",
    marginTop: 48,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  step__item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 48,
    flexWrap: "wrap",

    "&:nth-child(3) > svg": {
      display: "block",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },

    "& > p": {
      fontStyle: "italic",
      fontWeight: "normal",
      fontSize: 18,
      lineHeight: "21px",
      textAlign: "center",
      textTransform: "capitalize",
      width: 180,

      [theme.breakpoints.up("md")]: {
        marginRight: "auto",
      },
    },

    "& > svg": {
      width: "100%",
      marginTop: 20,

      [theme.breakpoints.up("md")]: {
        width: "initial",
        marginTop: 0,
      },
    },

    [theme.breakpoints.up("sm")]: {
      flexWrap: "no-wrap",
      width: "50%",
    },

    [theme.breakpoints.up("md")]: {
      flexWrap: "no-wrap",
      width: "30%",
      justifyContent: "flex-start",
    },
  },
}));
