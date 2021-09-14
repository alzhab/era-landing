import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { Button, Modal, Question } from "@components";
import { AppContext } from "@context";
import { LinearProgress, makeStyles, Theme } from "@material-ui/core";
import { IFieldType, IQuestionnaireType } from "@models/question";

export const Questionnaire = observer(() => {
  const classes = useStyles();
  const {
    stores: { questionsStore },
  } = useContext(AppContext);

  const answers = questionsStore.answers;

  const nextClickHandler = () => {
    if (questionsStore.activeQuestion === 1) {
      questionsStore.getList();
    } else if (
      questionsStore.activeQuestion !==
      questionsStore.list.length + 1
    ) {
      questionsStore.setActiveQuestion(questionsStore.activeQuestion + 1, true);
    } else {
      questionsStore.submitData();
    }
  };

  const backClickHandler = () => {
    const newActiveQuestion = questionsStore.activeQuestion - 1;

    if (newActiveQuestion < 1) {
      questionsStore.setModalOpen(false);
    } else if (newActiveQuestion === 1) {
      questionsStore.setActiveQuestion(newActiveQuestion);
      questionsStore.clear();
    } else {
      questionsStore.setActiveQuestion(newActiveQuestion);
    }
  };

  return (
    <>
      <Modal
        open={questionsStore.submitDataSuccess}
        close={() => {
          questionsStore.setSubmitDataSuccess(false);
          questionsStore.clear();
        }}
      >
        <p style={{ textAlign: "center", fontSize: 18, fontWeight: 700 }}>
          Спасибо. Заявка принята. В ближайшее время с Вами свяжется наш
          менеджер.
        </p>
      </Modal>

      <Modal
        open={questionsStore.modalOpen}
        close={() => questionsStore.setModalOpen(false)}
      >
        {questionsStore.loading && (
          <LinearProgress
            style={{ position: "absolute", left: 0, right: 0, top: 0 }}
          />
        )}

        <div className={classes.card__header}>
          <p>Пройдите тест и получите расчет стоимости</p>
          <p>
            {questionsStore.activeQuestion}/{questionsStore.list.length + 1}
          </p>
        </div>

        <div className={classes.card__progress}>
          <div
            style={{
              width:
                questionsStore.activeQuestion === 1
                  ? 0
                  : `${
                      (questionsStore.activeQuestion * 100) /
                      (questionsStore.list.length + 1)
                    }%`,
            }}
          />
        </div>

        {questionsStore.activeQuestion === 1 ? (
          <Question
            defaultValue={questionsStore.type}
            question={"Какой продукт вам нужен ?"}
            rootClassName={classes.card__body}
            answers={answers}
            fields={[
              {
                type: IFieldType.radio,
                name: IQuestionnaireType.web,
                placeholder: "Landing page",
              },
              {
                type: IFieldType.radio,
                name: IQuestionnaireType.corporate,
                placeholder: "Корпоративный сайт",
              },
              {
                type: IFieldType.radio,
                name: IQuestionnaireType.online,
                placeholder: "Интернет - магазин",
              },
              {
                type: IFieldType.radio,
                name: IQuestionnaireType.mobile,
                placeholder: "Мобильное приложение",
              },
            ]}
            onChange={(type) =>
              questionsStore.setType(type as IQuestionnaireType)
            }
          />
        ) : (
          <Question
            question={questionsStore.activeQuestionData.name}
            rootClassName={classes.card__body}
            answers={answers}
            fields={questionsStore.activeQuestionData.fields || []}
            onChange={(newVal, index) =>
              questionsStore.setAnswer(newVal, index)
            }
          />
        )}

        <div className={classes.card__footer}>
          <Button click={backClickHandler} className={classes.back_button}>
            Назад
          </Button>
          <Button click={nextClickHandler} className={classes.next_button}>
            {questionsStore.list.length &&
            questionsStore.list.length + 1 === questionsStore.activeQuestion
              ? "Получить расчет"
              : "Далее"}
          </Button>
        </div>
      </Modal>
    </>
  );
});

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
    flexDirection: "column-reverse",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  back_button: {
    background: "#E2E2E2 !important",
    boxShadow: "none !important",
    color: "#5E5E5E !important",
    width: "80%",
    marginTop: "15px !important",

    [theme.breakpoints.up("md")]: {
      marginTop: 0,
      width: "initial",
    },
  },
  next_button: {
    width: "80%",

    [theme.breakpoints.up("md")]: {
      width: "initial",
    },
  },
}));
