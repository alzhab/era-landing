import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { FONTS } from "@assets/const";

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    // 'font-family: Circe;'
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    fontFamily: FONTS.medium,

    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      fontSize: 36,
    },
  },
}));

interface IHeadingProps {
  title: string;
}

export const Heading: FC<IHeadingProps> = (props) => {
  const classes = useStyles();

  return <h3 className={classes.heading}>{props.title}</h3>;
};
