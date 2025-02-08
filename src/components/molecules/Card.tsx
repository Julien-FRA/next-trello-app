import { styled } from '@mui/system';
import React from 'react';
import TitleCard from '../atoms/TitleCard';
import ItemCard from '../atoms/ItemCard';
import AddCard from '../atoms/AddCard';

const CardWrapper = styled('div')(
    `
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    display: flex;
    flex-direction: column;
    margin-left: 4px;
    margin-right: 4px;
    width: 272px;

    &:first-child {
        margin-left: 8px;
    }
    `,
);

const CardContainer = styled('div')(
    `
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    background-color: rgb(235, 236, 240);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    `,
);

const CardItems = styled('div')(
    `
    padding-left: 8px;
    padding-right: 8px;
    `,
);

const Card = () => {
  return (
    <CardWrapper>
      <CardContainer>
        <TitleCard>My first list</TitleCard>
        <CardItems>
            <ItemCard>My first card</ItemCard>
            <ItemCard>My second card</ItemCard>
            <ItemCard>Followed card</ItemCard>
        </CardItems>
        <AddCard>Ajouter une autre carte</AddCard>
      </CardContainer>
    </CardWrapper>
  )
}

export default Card
