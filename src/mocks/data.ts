import { TLists } from "../types/lists";

export const APIMockData: TLists[] = [
  {
    idList: 0,
    titleList: "My first list",
    cards: [
      {
        idCard: 0,
        titleCard: "My first card",
        followedCard: false,
      },
      {
        idCard: 1,
        titleCard: "My second card",
        followedCard: false,
      },
      {
        idCard: 2,
        titleCard: "Followed card",
        followedCard: true,
      },
    ],
  },
  {
    idList: 1,
    titleList: "My second list",
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
