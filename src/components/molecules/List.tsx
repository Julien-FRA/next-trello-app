import { styled } from "@mui/system";
import React from "react";
import TitleCard from "../atoms/TitleCard";
import ItemCard from "../atoms/ItemCard";
import AddCard from "../atoms/AddCard";
import { TCard } from "@/types/card";

type ListProps = {
  idList: number;
  title: string;
  cards: TCard[];
  onDeleteList: () => void;
  onAddCard: (idList: number, cardTitle: string) => void;
  onUpdateCard: (
    idList: number,
    idCard: number,
    newTitle: string,
    newDasc: string
  ) => void;
  onDeleteCard: (idList: number, idCard: number) => void;
};

const ListCardWrapper = styled("div")(
  `
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    display: flex;
    flex-direction: column;
    margin-left: 4px;
    margin-right: 4px;
    width: 272px;

    &:first-of-type {
        margin-left: 8px;
    }
    `
);

const ListCardContainer = styled("div")(
  `
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    background-color: rgb(235, 236, 240);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    `
);

const CardItems = styled("div")(
  `
    padding-left: 8px;
    padding-right: 8px;
    `
);

const List = ({
  idList,
  title,
  cards,
  onDeleteList,
  onAddCard,
  onUpdateCard,
  onDeleteCard,
}: ListProps) => {
  return (
    <ListCardWrapper>
      <ListCardContainer>
        <TitleCard onDelete={() => onDeleteList()}>{title}</TitleCard>
        <CardItems>
          {cards.map((card, key) => (
            <ItemCard
              key={key}
              idList={idList}
              idCard={card.idCard}
              titleCard={card.titleCard}
              descCard={card.descCard}
              followedCard={card.followedCard}
              onUpdateCard={onUpdateCard}
              onDeleteCard={onDeleteCard}
            />
          ))}
        </CardItems>
        <AddCard onAddCard={onAddCard} idList={idList}>
          Ajouter une autre carte
        </AddCard>
      </ListCardContainer>
    </ListCardWrapper>
  );
};

export default List;
