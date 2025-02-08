import { styled } from '@mui/system';
import React from 'react';

type ItemCardProps = {
    children: React.ReactNode;
}

const ItemCardWrapper = styled('div')(
    `
    background-color: rgb(255, 255, 255) !important;
    border-radius: 3px !important;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 0px !important;
    cursor: pointer !important;
    margin-bottom: 8px !important;

    &:hover {
        background-color: rgb(244, 245, 247) !important;
    }
    `,
);

const ItemCardButton = styled('button')(
    `
    border-width: 0px !important;
    border-radius: 3px !important;
    cursor: pointer !important;
    font-size: 14px !important;
    color: rgb(255, 255, 255) !important;
    margin: 0px !important;
    outline: none !important;
    background-color: transparent !important;
    height: auto !important;
    line-height: 1 !important;
    padding: 0px !important;
    width: 100% !important;
    `,
);

const ItemCardText = styled('h2')(
    `
    -webkit-box-align: center !important;
    align-items: center !important;
    color: rgb(49, 49, 49) !important;
    display: flex !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    height: 32px !important;
    line-height: 20px !important;
    margin: 0px !important;
    padding-left: 8px !important;
    padding-right: 8px !important;
    text-align: left !important;
    `,
);

const ItemCard = ({children}: ItemCardProps) => {
  return (
    <ItemCardWrapper>
      <ItemCardButton>
        <ItemCardText>
            {children}
        </ItemCardText>
      </ItemCardButton>
    </ItemCardWrapper>
  )
}

export default ItemCard
