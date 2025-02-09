import React, { useEffect, useState } from "react";
import List from "../molecules/List";
import { styled } from "@mui/system";
import AddList from "../atoms/AddList";
import { TLists } from "@/types/lists";
import {
  fetchLocalStorage,
  removeLocalStorage,
  updateLocalStorage,
} from "@/helpers/apiLayers";
import InitData from "../molecules/InitData";

type ListsProps = {
  board: TLists[];
};

const ListWrapper = styled("div")(
  `
    -webkit-box-align: start;
    align-items: flex-start;
    display: flex;
    `
);

const Lists = ({ board }: ListsProps) => {
  const [lists, setLists] = useState<TLists[]>(board || []);

  useEffect(() => {
    updateLocalStorage(lists);
  }, [lists]);

  const resetListHandler = () => {
    setLists(board);
    removeLocalStorage();
    fetchLocalStorage();
  };

  const addListHandler = (titleList: string) => {
    setLists((prevLists) => [
      ...prevLists,
      {
        idList: prevLists.length + 1,
        titleList,
        cards: [],
      },
    ]);
  };

  const removeListHandler = (idList: number) => {
    setLists((prevLists) => prevLists.filter((list) => list.idList !== idList));
  };

  const addCardHandler = (idList: number, titleCard: string) => {
    setLists((prevLists) => {
      return prevLists.map((list) => {
        if (list.idList === idList) {
          const newCard = {
            idCard: list.cards.length + 1,
            titleCard,
            followedCard: false,
          };
          return { ...list, cards: [...list.cards, newCard] };
        }

        return list;
      });
    });
  };

  const updateCardHandler = (
    idList: number,
    idCard: number,
    newTitle: string,
    newDesc: string
  ) => {
    setLists((prevLists) => {
      return prevLists.map((list) => {
        if (list.idList === idList) {
          const updatedCards = list.cards.map((card) =>
            card.idCard === idCard
              ? { ...card, titleCard: newTitle, descCard: newDesc }
              : card
          );
          return { ...list, cards: updatedCards };
        }
        return list;
      });
    });
  };

  const deleteCardHandler = (idList: number, idCard: number) => {
    setLists((prevLists) => {
      return prevLists.map((list) => {
        if (list.idList === idList) {
          const updatedCards = list.cards.filter(
            (card) => card.idCard !== idCard
          ); // Supprimer la carte
          return { ...list, cards: updatedCards };
        }
        return list;
      });
    });
  };

  return (
    <>
      <InitData resetData={resetListHandler} />
      <ListWrapper>
        {lists.map((list, key) => (
          <List
            key={key}
            idList={list.idList}
            title={list.titleList}
            cards={list.cards}
            onDeleteList={() => removeListHandler(list.idList)}
            onAddCard={addCardHandler}
            onUpdateCard={updateCardHandler}
            onDeleteCard={deleteCardHandler}
          />
        ))}
        <AddList addList={addListHandler}>Ajouter une autre liste</AddList>
      </ListWrapper>
    </>
  );
};

export default Lists;
