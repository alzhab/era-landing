import React, { FC } from "react";
import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";
import { IQuestion } from "@models/question";

interface IQuestionProps {
  data: IQuestion;
}

const useStyles = makeStyles((theme) => ({
  question: {
    display: "flex",
    flexDirection: "column",
  },
  questionName: {
    fontSize: 16,
    marginBottom: 24,
  },
  questionButtons: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 20,

    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
}));

export const QuestionOld: FC<IQuestionProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.question}>
      <h3 className={classes.questionName}>{data.name}</h3>

      {data.fields &&
        data.fields.map((field, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={false}
                onChange={() => console.log("check")}
                name="checked"
                color="primary"
              />
            }
            label="Primary"
          />
        ))}
    </div>
  );
};
