import React, { FC, useContext, useEffect, useState } from "react";
import { themes } from "@models/themes";
import Question1 from "@assets/images/Question1.svg";
import { makeStyles, Theme } from "@material-ui/core";
import { FONTS } from "@assets/const";
import { ThemeContext } from "@context";
import { Checkbox, Radio } from "@components";
import { IField, IFieldType, IQuestionnaireType } from "@models/question";

interface IQuestionProps {
  rootClassName?: any;
  question: string;
  defaultValue?: string;
  onChange: (newVal: string | string[]) => void;
  fields: IField[];
}

export const Question: FC<IQuestionProps> = (props) => {
  const classes = useStyles();
  const [activeValue, setActiveValue] = useState(props.defaultValue);
  const [checkoxActiveValues, setCheckoxActiveValues] = useState<string[]>([]);

  const onChangeRadioHandler = (newVal: string) => {
    setActiveValue(newVal);
    props.onChange(newVal);
  };

  const onChangeCheckboxHandler = (newVal: string[]) => {
    setCheckoxActiveValues(newVal);
    props.onChange(newVal);
  };

  const fields: { [key in IFieldType]: any } = {
    [IFieldType.radio]: (field: IField) => (
      <Radio
        label={field.placeholder || field.name}
        value={field.name}
        activeValue={activeValue}
        onChange={onChangeRadioHandler}
      />
    ),
    [IFieldType.checkbox]: (field: IField) => (
      <Checkbox
        label={field.placeholder || field.name}
        value={field.name}
        activeValues={checkoxActiveValues}
        onChange={onChangeCheckboxHandler}
      />
    ),
    [IFieldType.text]: (field: IField) => (
      <Radio
        label={field.placeholder || field.name}
        value={field.name}
        activeValue={activeValue}
        onChange={onChangeRadioHandler}
      />
    ),
  };

  return (
    <div className={`${classes.card__body} ${props.rootClassName}`}>
      <div className={classes.card__question}>
        <h2>{props.question}</h2>

        {props.fields.map((field) => fields[field.type](field))}
      </div>

      <img src={Question1} alt="" />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  card__body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",

    "& > img": {
      display: "none",

      [theme.breakpoints.up("md")]: {
        display: "block",
      },
    },
  },
  card__question: {
    width: "100%",

    "& > h2": {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 24,
      lineHeight: "35px",
      marginBottom: 24,
      fontFamily: FONTS.medium,
    },

    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  },
  card__answer: {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    cursor: "pointer",

    "& > span": {
      minWidth: 18,
      minHeight: 18,
      maxWidth: 18,
      maxHeight: 18,
      borderRadius: "50%",

      "&.active": {
        border: "none !important",
        backgroundColor: "#0093D1",
      },
    },

    "& > p": {
      marginLeft: 48,
      fontSize: 16,
      lineHeight: "24px",
    },
  },
  card__footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
