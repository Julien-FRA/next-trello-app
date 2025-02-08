import { styled } from '@mui/system';
import React from 'react';
import TitleCard from '../atoms/TitleCard';
import ItemCard from '../atoms/ItemCard';
import AddCard from '../atoms/AddCard';
import { CardType } from '@/types/card';

type ListProps = {
  title: string;
  cards : CardType[];
  handleTitleCard: (text: string) => void;
}

const ListCardWrapper = styled('div')(
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

const ListCardContainer = styled('div')(
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

const List = ({title, cards, handleTitleCard}: ListProps) => {
  return (
    <ListCardWrapper>
      <ListCardContainer>
        <TitleCard>{title}</TitleCard>
        <CardItems>
          {
            cards.map((card, key) => (
              <ItemCard key={key}>{card.title}</ItemCard>
            ))
          }
        </CardItems>
        <AddCard onSubmit={handleTitleCard}>Ajouter une autre carte</AddCard>
      </ListCardContainer>
    </ListCardWrapper>
  )
}

export default List
