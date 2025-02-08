import React from 'react';
import Image from 'next/image'
import logo from '../../../public/logo.png';
import { styled } from '@mui/system';

const LogoWrapper = styled('div')(
    `
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0.5;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 30px;

    &:hover {
    opacity: 1;
    }
    `,
);

const Logo = () => {
  return (
    <LogoWrapper>
        <Image src={logo} alt='logo' style={{width: '100%', height: 'auto', objectFit: 'cover'}} />
    </LogoWrapper>
  )
}

export default Logo
