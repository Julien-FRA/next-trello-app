import React from 'react'
import List from '../molecules/List';
import { styled } from '@mui/system';
import AddList from '../atoms/AddList';
import { Card } from '@/types/card';

const ListWrapper = styled('div')(
    `
    -webkit-box-align: start;
    align-items: flex-start;
    display: flex;
    `,
);

const Lists = () => {
  const listOne: Card[] = [
    { title: 'My first card', followed: false },
    { title: 'My second card', followed: false },
    { title: 'Followed card', followed: true },
  ];

  const listTwo: Card[] = [
    { title: 'Followed card with desc', desc: 'This is the description for card 1', followed: true },
  ];
  
  return (
    <ListWrapper>
      <List title={'My first list'} cards={listOne} />
      <List title={'My second list'} cards={listTwo} />
      <AddList>Ajouter une autre liste</AddList>
    </ListWrapper>
  )
}

export default Lists
