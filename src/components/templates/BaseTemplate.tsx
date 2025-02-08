'use client';

import React from 'react';
import Header from '../organisms/Header';

type BaseTemplateProps = {
    children: React.ReactNode;
}

const BaseTemplate = ({children}: BaseTemplateProps) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default BaseTemplate
