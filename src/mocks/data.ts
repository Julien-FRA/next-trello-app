import { TLists } from "../types/lists";

export const APIMockData: TLists[] = [
  {
    idList: 0,
    titleList: "My first list",
    cards: [
      {
        idCard: 0,
        titleCard: "My first card",
        descCard: "Task1 Detail Description",
        followedCard: false,
      },
      {
        idCard: 1,
        titleCard: "My second card",
        descCard: "Task2 Detail Description",
        followedCard: false,
      },
      {
        idCard: 2,
        titleCard: "Followed card",
        descCard: "Task3 Detail Description",
        followedCard: true,
      },
    ],
  },
  {
    idList: 1,
    titleList: "My sedonc list",
    cards: [
      {
        idCard: 0,
        titleCard: "Followed card with description",
        descCard: "Task1 Detail Description",
        followedCard: true,
      },
    ],
  },
];
