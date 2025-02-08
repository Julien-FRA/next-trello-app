import React from 'react'
import Card from '../molecules/Card';
import { styled } from '@mui/system';
import AddList from '../atoms/AddList';

const ListWrapper = styled('div')(
    `
    -webkit-box-align: start;
    align-items: flex-start;
    display: flex;
    `,
);

const List = () => {
  return (
    <ListWrapper>
      <Card />
      <Card />
      <AddList>Ajouter une autre liste</AddList>
    </ListWrapper>
  )
}

export default List
