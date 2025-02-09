"use client";

import React from "react";
import ButtonInitData from "../atoms/ButtonInitData";
import { styled } from "@mui/system";
import TitleOne from "../atoms/TitleOne";

const InitDataWrapper = styled("div")(
  `
    display: flex;
    align-items: center;
    padding: 8px 0px;
    `
);

const InitData = ({ resetData }: any) => {
  return (
    <InitDataWrapper>
      <TitleOne>Tableau principal</TitleOne>
      <ButtonInitData resetData={resetData}>
        Initialiser le jeu de données
      </ButtonInitData>
    </InitDataWrapper>
  );
};

export default InitData;
