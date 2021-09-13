import React, { FC } from "react";
import CirclesBack from "@assets/images/Circles.svg";

export const Circles: FC<any> = (props) => {
  return (
    <div
      style={{
        background: `url(${CirclesBack}) bottom center / contain`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {props.children}
    </div>
  );
};
