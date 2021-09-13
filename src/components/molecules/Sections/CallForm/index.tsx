import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { LinearProgress, makeStyles, Theme } from "@material-ui/core";
import { Button, Input, Modal } from "@components";
import { AppContext } from "@context";
import { Controller, useForm } from "react-hook-form";
import { colors } from "@assets/const";

export const CallForm = observer(() => {
  const {
    stores: { consultationStore },
  } = useContext(AppContext);
  const classes = useStyles();

  const { getValues, handleSubmit, control, setValue } = useForm();

  const submit = () => {
    const phone = getValues()["phone"];
    consultationStore.sendConsultation(phone);
  };

  useEffect(() => {
    if (consultationStore.success) {
      setValue("phone", "");
    }
  }, [consultationStore.success]);

  return (
    <>
      <Modal
        open={consultationStore.success}
        close={() => consultationStore.clear()}
      >
        <p style={{ textAlign: "center", fontSize: 18, fontWeight: 700 }}>
          Спасибо. Заявка принята. В ближайшее время с Вами свяжется наш
          менеджер.
        </p>
      </Modal>

      <section className={classes.callForm}>
        <div className={"gradient-back"} />

        {consultationStore.loading && (
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
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                mask
                disabled={consultationStore.loading}
                className={classes.callForm__input}
                placeholder={"+7"}
                error={error?.message || ""}
              />
            )}
          />

          <Button
            click={handleSubmit(submit)}
            className={classes.callForm__button}
            disabled={consultationStore.loading}
            padding={{ right: 38 }}
          >
            Получить бесплатную консультацию специалиста
          </Button>
        </div>
      </section>
    </>
  );
});

const useStyles = makeStyles((theme: Theme) => ({
  callForm: {
    position: "relative",

    "& .container": {
      padding: "35px 0",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
  },
  callForm__button: {
    fontSize: 14,

    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
  },
  callForm__input: {
    marginRight: 0,

    [theme.breakpoints.up("md")]: {
      marginRight: 24,
    },
  },
}));
