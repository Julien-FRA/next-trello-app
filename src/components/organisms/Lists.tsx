import React, { useState } from 'react'
import List from '../molecules/List';
import { styled } from '@mui/system';
import AddList from '../atoms/AddList';
import { ListsType } from '@/types/lists';

type ListsProps = {
  lists: ListsType[];
}

const ListWrapper = styled('div')(
    `
    -webkit-box-align: start;
    align-items: flex-start;
    display: flex;
    `,
);

const Lists = ({lists}: ListsProps) => {
  const [titleCard, setTitleCard] = useState<string>('');

  const handleSubmit = (text: string) => {
    setTitleCard(text);
  };

  lists.map((list) => {
    list.cards.push({title: titleCard, followed: false});
  })

  console.log(titleCard);
  
  return (
    <ListWrapper>
      {
        lists.map((list, key) => (
          <List key={key} title={list.title} cards={list.cards} handleTitleCard={handleSubmit} />
        ))
      }
      <AddList>Ajouter une autre liste</AddList>
    </ListWrapper>
  )
}

export default Lists
