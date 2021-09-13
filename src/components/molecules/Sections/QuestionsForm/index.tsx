import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { LinearProgress, makeStyles, Theme } from "@material-ui/core";
import { Button, Heading, Input, Modal } from "@components";

import Desk from "@assets/images/Desk.svg";
import { colors, FONTS } from "@assets/const";
import { AppContext } from "@context";
import { Controller, useForm } from "react-hook-form";
import validator from "./validator";

export const QuestionsForm = observer(() => {
  const {
    stores: { applicationStore },
  } = useContext(AppContext);
  const classes = useStyles();

  const { getValues, handleSubmit, control, setValue } = useForm();

  const submit = () => {
    const { phone, email, name } = getValues();
    applicationStore.sendApplication({ phone_number: phone, email, name });
  };

  useEffect(() => {
    if (applicationStore.success) {
      setValue("phone", "");
      setValue("email", "");
      setValue("name", "");
    }
  }, [applicationStore.success]);

  return (
    <>
      <Modal
        open={applicationStore.success}
        close={() => applicationStore.clear()}
      >
        <p style={{ textAlign: "center", fontSize: 18, fontWeight: 700 }}>
          Спасибо. Заявка принята. В ближайшее время с Вами свяжется наш
          менеджер.
        </p>
      </Modal>

      <section className={classes.questions}>
        <div className="gradient-back" />

        {applicationStore.loading && (
          <LinearProgress
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              backgroundColor: colors.primary,
            }}
          />
        )}

        <div className="container">
          <Heading title={"Остались вопросы?"} />

          <div className={classes.questions__info}>
            <form className={classes.questions__form}>
              <h3>
                Оставьте свои данные, мы перезвоним вам в течении 10 минут
              </h3>

              <Controller
                control={control}
                name={"name"}
                rules={{
                  required: "Поле обязательно",
                }}
                render={({
                  field: { value, onChange, onBlur },
                  fieldState: { error },
                }) => (
                  <Input
                    rootStyle={{ marginBottom: error?.message ? 30 : 8 }}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={applicationStore.loading}
                    placeholder={"Ваше имя"}
                    error={error?.message || ""}
                  />
                )}
              />

              <Controller
                control={control}
                name={"email"}
                rules={{
                  required: "Поле обязательно",
                  pattern: {
                    value: validator,
                    message: "Адрес электронной почты недействителен",
                  },
                }}
                render={({
                  field: { value, onChange, onBlur },
                  fieldState: { error },
                }) => (
                  <Input
                    rootStyle={{ marginBottom: error?.message ? 30 : 8 }}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={applicationStore.loading}
                    placeholder={"Почта"}
                    error={error?.message || ""}
                  />
                )}
              />

              <Controller
                control={control}
                name={"phone"}
                rules={{
                  required: "Поле обязательно",
                  pattern: {
                    value: RegExp(
                      /^\+[0-9] \([0-9]{3}\) [0-9]{3} [0-9]{2}-[0-9]{2}$/
                    ),
                    message: "Не верный номер телефона",
                  },
                }}
                render={({
                  field: { value, onChange, onBlur },
                  fieldState: { error },
                }) => (
                  <Input
                    rootStyle={{ marginBottom: error?.message ? 30 : 8 }}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    mask
                    disabled={applicationStore.loading}
                    placeholder={"+7"}
                    error={error?.message || ""}
                  />
                )}
              />

              <Button
                className={classes.questions__button}
                padding={{ right: 66 }}
                style={{ marginTop: 16 }}
                click={handleSubmit(submit)}
                disabled={applicationStore.loading}
              >
                Оставить заявку
              </Button>
            </form>

            <img src={Desk} alt="" />
          </div>
        </div>
      </section>
    </>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  questions: {
    position: "relative",

    "& .container": {
      position: "relative",
      padding: "48px 0",
    },
  },
  questions__info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
    },

    "& > img": {
      display: "none",

      [theme.breakpoints.up("md")]: {
        display: "block",
      },
    },
  },
  questions__form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    "& > h3": {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 18,
      marginBottom: 24,
      fontFamily: FONTS.medium,
      textAlign: "center",

      [theme.breakpoints.up("md")]: {
        fontSize: 24,
        textAlign: "left",
      },
    },
  },
  questions__button: {
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: "initial",
    },
  },
}));
