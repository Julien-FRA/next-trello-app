import { styled } from '@mui/system';
import React from 'react';

type TitleOneProps = {
    children: React.ReactNode;
}

const TitleOneWrapper = styled('h1')(
    `
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    font-size: 18px;
    font-weight: 700;
    height: 32px;
    margin: 0px;
    padding-left: 12px;
    color: #fff;
    `,
);

const TitleOne = ({children}: TitleOneProps) => {
  return (
    <TitleOneWrapper>
      {children}
    </TitleOneWrapper>
  )
}

export default TitleOne
