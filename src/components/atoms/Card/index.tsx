import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  questionsContainer: {
    backgroundColor: "#fff",
    maxWidth: 800,
    width: "90%",
    height: 250,
    borderRadius: 5,
    overflow: "hidden",
  },
}));

interface ICardProps {}

export const Card: FC<ICardProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.questionsContainer}>{children}</div>
    </div>
  );
};
