import React from "react";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";
import { Heading } from "@components";

import Review1 from "@assets/images/Review1.svg";
import Review2 from "@assets/images/Review2.svg";
import Review3 from "@assets/images/Review3.svg";
import Review4 from "@assets/images/Review4.svg";
import { FONTS } from "@assets/const";

export const Reviews = observer(() => {
  const classes = useStyles();

  return (
    <section className={classes.reviews}>
      <div className="container">
        <Heading title={"Отзывы"} />

        <div className={classes.reviews__content}>
          <div className={classes.reviews__list}>
            <div className={classes.revviews__item}>
              <img src={Review1} alt="" />

              <div>
                <h4>Таукенов Адильхан</h4>

                <p>
                  Посоветовал коллега Руслана, встретились, поговорили,
                  закрепили. Команда разрабатывала сервис внутреннего
                  использования для отслеживания за товаром и персоналом.
                  Выполнили даже раньше назначенного срока. Продуктом очень
                  доволен
                </p>
              </div>
            </div>

            <div className={classes.revviews__item}>
              <img src={Review2} alt="" />

              <div>
                <h4>Некрасов Даниил</h4>

                <p>
                  Обращалась к ребятам для разработки сайта для моего салона.
                  Ребята справились просто на отлично! Выполнили задачу даже
                  лучше чем ожидала😍. Раньше у меня были проблемы с реализацией
                  дизайна, пока не заказала сайт в Setdata. Мой заказ выполнили
                  на ура! Однознано теперь только к ним
                </p>
              </div>
            </div>

            <div className={classes.revviews__item}>
              <img src={Review3} alt="" />

              <div>
                <h4>Богачева Анна</h4>

                <p>
                  Добрый день, хотел бы поблагодарить разработчиков, за отлично
                  выполненную работу,хочу отметить что во многих нюансах идут
                  навстречу, что для меня оказалось очень приятно. Работу я брал
                  для презентации алкоголя, сам в этом не разбираюсь, попросил
                  сделать сайт, с картинками и торговыми ячейками, работу
                  выполнили в сроки, рекомендую, отличные ребята👍🏻
                </p>
              </div>
            </div>

            <div className={classes.revviews__item}>
              <img src={Review4} alt="" />

              <div>
                <h4>Мамеев Ильяс</h4>

                <p>
                  Отличный сервис, быстро, качественно и что важно по адекватной
                  цене. Заказывал одностраничный сайт, сделали быстро и красиво
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  reviews: {
    "& .container": {
      padding: "60px 0 24px 0",
      display: "flex",
      flexDirection: "column",
    },
  },
  reviews__content: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    marginTop: 36,
  },
  reviews__list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  revviews__item: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: 36,
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      width: "48%",
      alignItems: "center",
      flexDirection: "row",
    },

    "& h4": {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: "24px",
      margin: "24px 24px 10px",
      fontFamily: FONTS.bold,
      marginTop: 24,
      textAlign: "center",

      [theme.breakpoints.up("md")]: {
        marginTop: 0,
        textAlign: "left",
      },
    },

    "& p": {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: "24px",
      margin: "0px 24px",
    },
  },
}));
