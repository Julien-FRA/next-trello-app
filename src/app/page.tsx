"use client"

import InitData from "@/components/molecules/InitData";
import List from "@/components/organisms/Lists";
import { ListsType } from "@/types/lists";

export default function Home() {
  const listOne: ListsType = { 
    title: 'My first list', 
    cards: [{
      title: 'My first card', followed: false
    },
    {
      title: 'My second card', followed: false

    },
    {
      title: 'Followed card', followed: true

    }]
  };

  const listTwo: ListsType = { 
    title: 'My second list', 
    cards: [{
      title: 'Followed card with desc', desc: 'This is the description for card 1', followed: true},
    ]
  };

  return (
      <main className="main">
        <InitData />
        <List lists={[listOne, listTwo]} />
      </main>
  );
}
