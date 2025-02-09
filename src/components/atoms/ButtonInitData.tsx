import { styled } from "@mui/system";
import React from "react";

type ButtonInitDataProps = {
  children: React.ReactNode;
  resetData: () => void;
};

const ButtonWrapper = styled("button")(
  `
    background-color: rgb(90, 172, 68);
    border-width: 0px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
    color: rgb(255, 255, 255);
    margin: 0px 0px 0px 20px;
    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    line-height: 32px;
    height: 32px;

    &:hover {
    background-color: rgb(97, 189, 79);
    }
    `
);

const ButtonInitData = ({ children, resetData }: ButtonInitDataProps) => {
  return <ButtonWrapper onClick={resetData}>{children}</ButtonWrapper>;
};

export default ButtonInitData;
