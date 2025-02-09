"use client";

import List from "@/components/organisms/Lists";
import { fetchLocalStorage } from "@/helpers/apiLayers";

export default function Home() {
  const boardListData = fetchLocalStorage();

  return (
    <main className="main">
      <List board={boardListData} />
    </main>
  );
}
