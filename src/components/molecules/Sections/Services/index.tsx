import React, { useContext, useState } from "react";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";
import { Button, ButtonType, Heading } from "@components";
import FingersLeft from "@assets/images/FingersLeft.svg";
import { FONTS } from "@assets/const";
import { AppContext, ThemeContext } from "@context";
import { themes } from "@models/themes";
import { IQuestionnaireType } from "@models/question";

const tabs = [
  { id: 1, title: "Landing page" },
  { id: 2, title: "Интернет магазин" },
  { id: 3, title: "Корпоративный сайт" },
  { id: 4, title: "Мобильное приложение" },
];

const configs = {
  1: {
    title: "landing page",
    text: `Landing page –  это одностраничный сайт. Основная задача - увеличение конверсии. <br /> Лендинг подталкивает потенциального клиента к тому, чтобы стать клиентом действующим.`,
    price: 250000,
    list: ["анализ рынка", "разработка дизайна", "тестирование"],
    type: IQuestionnaireType.web,
  },
  2: {
    title: "интернет магазин",
    text:
      "От остальных сайтов интернет-магазины отличаются, в первую очередь, тем, что здесь представлен не только каталог товаров, но и предоставляется возможность их покупки непосредственно на сайте. Открыть свой интернет-магазин могут как крупные компании, так и представители малого бизнеса.",
    price: 500000,
    list: [
      "анализ рынка",
      "разработка дизайна",
      "интегрированная корзина",
      "возможность получать прибыль на карту",
      "тестирование",
    ],
    type: IQuestionnaireType.online,
  },
  3: {
    title: "корпоративный сайт",
    text:
      "Корпоративный сайт – это полноценное представительство компании в Интернете. Здесь содержится полная информация о фирме, услугах или продукции, которые она предлагает, и тому подобное. Расширенные функциональные возможности, а также возможной интеграции с внутренними системами компании.",
    price: 450000,
    list: [
      "анализ рынка",
      "разработка дизайна",
      "интегрированная корзина",
      "возможность получать прибыль на карту",
      "тестирование",
    ],
    type: IQuestionnaireType.corporate,
  },
  4: {
    title: "Мобильное приложение",
    text: `Мобильные приложения - это программные продукты, разработанные специально для мобильных телефонов, смартфонов, коммуникаторов, планшетных компьютеров или других мобильных устройств. Они позволяют решать различные прикладные задачи: от мобильной картографии и приема электронной почты до узкоспециализированных функций.`,
    price: 400000,
    list: [
      "анализ рынка",
      "разработка дизайна",
      "интегрированная корзина",
      "возможность получать прибыль на карту",
      "тестирование",
    ],
    type: IQuestionnaireType.mobile,
  },
};

export const Services = observer(() => {
  const {
    stores: { questionsStore },
  } = useContext(AppContext);
  const { themeName } = useContext(ThemeContext);
  const [activeService, setActiveService] = useState(1);
  const classes = useStyles();

  return (
    <section className={classes.services} id="services">
      <div className="container">
        <Heading title={"Наши услуги"} />

        <div className={classes.services__tabs}>
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              click={() => setActiveService(tab.id)}
              className={`${classes.tab}`}
              type={
                tab.id === activeService
                  ? ButtonType.active
                  : ButtonType.inactive
              }
            >
              {tab.title}
            </Button>
          ))}
        </div>
      </div>

      <div className={classes.services__slide}>
        <img src={FingersLeft} alt="" className={classes.slide__img} />

        <div className={classes.slide__info}>
          <div className={classes.slide__type}>
            <h3>{configs[activeService].title}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: configs[activeService].text }}
            />
            <span>
              от {new Intl.NumberFormat().format(configs[activeService].price)}{" "}
              тг
            </span>

            <Button
              click={() =>
                questionsStore.chooseType(configs[activeService].type)
              }
              padding={{ right: 73 }}
            >
              Мне нужно это
            </Button>
          </div>

          <div
            className={classes.slide__line}
            style={{ backgroundColor: themes[themeName].color }}
          />

          <div className={classes.slide__list}>
            <h3>Что входит?</h3>
            <ul>
              {configs[activeService].list.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  services: {
    minHeight: "100vh",
    paddingTop: 72,
    paddingBottom: 72,
    display: "flex",
    flexDirection: "column",
  },
  services__tabs: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 58,
    marginBottom: 72,
  },
  tab: {
    // font-family: Circe;
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 15,
    textAlign: "center",
    padding: "10px 24px",
    cursor: "pointer",
    width: "100%",
    marginBottom: "24px !important",
    boxShadow: "none",

    [theme.breakpoints.up("md")]: {
      width: "45%",
    },

    [theme.breakpoints.up("lg")]: {
      width: "initial",
      marginBottom: "0 !important",
      fontSize: 24,
    },
  },
  services__slide: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },

  slide__img: {
    display: "none",

    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },

  slide__info: {
    width: "90%",
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",

    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
      margin: 0,
    },

    [theme.breakpoints.up("lg")]: {
      width: "60%",
    },
  },
  slide__type: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      marginLeft: 47,
      width: 400,
    },

    "& > h3": {
      // font-family: Circe;
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 24,
      textTransform: "uppercase",
      marginBottom: 24,
      fontFamily: FONTS.bold,
      textAlign: "center",

      [theme.breakpoints.up("md")]: {
        textAlign: "left",
      },
    },
    "& > p": {
      // font-family: Circe;
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 18,
      lineHeight: "27px",
      marginBottom: 24,
      textAlign: "center",

      [theme.breakpoints.up("md")]: {
        textAlign: "left",
      },
    },
    "& > span": {
      // font-family: Circe;
      display: "block",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 24,
      marginBottom: 36,
      fontFamily: FONTS.bold,
      textAlign: "center",

      [theme.breakpoints.up("md")]: {
        textAlign: "left",
      },
    },
  },

  slide__line: {
    height: 1,
    width: "80%",
    margin: "47px 10%",

    [theme.breakpoints.up("md")]: {
      width: 1,
      height: 208,
      margin: "0 47px",
    },
  },

  slide__list: {
    "& > h3": {
      // font-family: Circe;
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 24,
      marginBottom: 47,
      fontFamily: FONTS.medium,
    },
    "& > ul > li": {
      marginBottom: 15,
      listStyle: "disc",
    },
  },
}));
