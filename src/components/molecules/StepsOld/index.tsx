import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { colors } from "@assets/const";
import { IQuestion } from "@models/question";

const useStyles = makeStyles((theme) => ({
  steps: {
    backgroundColor: colors.primary,
    width: 125,
    display: "none",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: "35px 0",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  stepsTitle: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    marginBottom: 30,
  },
  stepsCircles: {
    display: "flex",
    height: 250,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column-reverse",
    width: 2,
    overflow: "visible",
    background: colors.secondary,
    transition: ".3s ease-out",
    position: "relative",
  },
  stepsCirclesBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
  },
  stepsCircleItem: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    position: "relative",
    backgroundColor: colors.secondary,
    transition: ".3s ease-out",

    "& span": {
      position: "absolute",
      width: 8,
      height: 8,
      backgroundColor: colors.secondary,
      opacity: 0,
      transition: ".3s ease-out",
      zIndex: 3,
      transform: "translate(-50%, -50%)",
      left: "50%",
      top: "50%",
      borderRadius: "50%",
    },

    "& div": {
      position: "absolute",
      width: 12,
      height: 12,
      backgroundColor: "#fff",
      opacity: 0,
      transition: ".3s ease-out",
      zIndex: 2,
      transform: "translate(-50%, -50%)",
      left: "50%",
      top: "50%",
      borderRadius: "50%",
    },
  },
  stepsCircleItemBeforeActive: {
    backgroundColor: "#fff",
  },
  stepsCircleItemActive: {
    "& span": {
      opacity: 1,
    },

    "& div": {
      width: 16,
      height: 16,
      opacity: 1,
    },
  },
}));

interface IStepsProps {
  activeStep: number;
  data: IQuestion[];
}

export const StepsOld: FC<IStepsProps> = ({ activeStep, data }) => {
  const classes = useStyles();
  const stepsLength = data.length;

  return (
    <div className={classes.steps}>
      <h2 className={classes.stepsTitle}>
        {activeStep + 1} из {stepsLength}
      </h2>

      <ul
        className={classes.stepsCircles}
        style={{
          backgroundPosition: `0px calc(${
            (100 / stepsLength) * (activeStep + 1)
          }%)`,
        }}
      >
        <div
          className={classes.stepsCirclesBar}
          style={{
            top: `calc(100% / ${stepsLength - 1} * ${
              stepsLength - 1 - activeStep
            })`,
          }}
        />
        {data.map((item, index) => (
          <li
            key={index}
            className={`${classes.stepsCircleItem} ${
              index === activeStep ? classes.stepsCircleItemActive : ""
            } ${index < activeStep ? classes.stepsCircleItemBeforeActive : ""}`}
          >
            <div />
            <span />
          </li>
        ))}
      </ul>
    </div>
  );
};
