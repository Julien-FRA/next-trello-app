import { styled } from '@mui/system';
import React from 'react';
import Logo from '../atoms/Logo';

const HeaderWrapper = styled('header')(
    `
    background-color: rgb(17, 17, 17);
    display: flex;
    height: 40px;
    position: relative;
    `,
);

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
    </HeaderWrapper>
  )
}

export default Header
