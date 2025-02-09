import { APIMockData } from "../mocks/data";
import { TLists } from "../types/lists";

const LocalStorageKeyName = "trello";

const isClientSide = typeof window !== "undefined";

export function fetchLocalStorage() {
  const apiData: TLists[] = APIMockData;
  let workSpaceList: TLists[] = [];

  if (isClientSide) {
    const localStorageData = localStorage.getItem(LocalStorageKeyName);
    if (localStorageData) {
      try {
        const parsedData: TLists[] = JSON.parse(localStorageData);
        workSpaceList = [...parsedData];
      } catch (error) {
        console.error(
          "Erreur lors de l'analyse des données de localStorage :",
          error
        );
        workSpaceList = [...apiData];
        updateLocalStorage(workSpaceList);
      }
    } else {
      workSpaceList = [...apiData];
      updateLocalStorage(workSpaceList);
    }
  } else {
    workSpaceList = [...apiData];
  }

  return workSpaceList;
}

export function updateLocalStorage(data: TLists[]) {
  if (isClientSide) {
    localStorage.setItem(LocalStorageKeyName, JSON.stringify(data));
  }
}

export function removeLocalStorage() {
  if (isClientSide) {
    localStorage.removeItem(LocalStorageKeyName);
  }
}
