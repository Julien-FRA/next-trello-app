import { styled } from "@mui/system";
import React, { useState } from "react";

type AddCardProps = {
  children: React.ReactNode;
  idList: number;
  onAddCard: (idList: number, cardTitle: string) => void;
};

const AddCardWrapper = styled("form")(
  `
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    display: flex;
    flex-direction: column;
    padding: 8px;
    `
);

const AddCardButton = styled("button")(
  `
    -webkit-box-align: center;
    border-width: 0px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
    margin: 0px;
    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    align-items: center;
    color: rgb(97, 97, 97);
    background-color: transparent;
    display: flex;
    height: 30px;
    line-height: 30px;
    text-align: left;

    &:hover {
        background-color: rgba(9, 30, 66, 0.08);
    }

    span {
        margin-right: 4px;
        position: relative;
        height: 20px;
        width: 20px;

        &::before {
            content: "";
            background-color: rgb(97, 97, 97);
            height: 12px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: background 85ms ease-in 0s;
            width: 2px;
        }

        &::after {
            content: "";
            background-color: rgb(97, 97, 97);
            height: 2px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: background 85ms ease-in 0s;
            width: 12px;
        }
    }
    `
);

const AddCardTextArea = styled("textarea")(
  `
    appearance: none;
    border-radius: 3px;
    border-width: 0px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 0px;
    font-size: 14px;
    min-height: 72px;
    padding-top: 8px;
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
  `
);

const AddCardSubmit = styled("button")(
  `
    background-color: rgb(90, 172, 68);
    border-width: 0px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
    color: rgb(255, 255, 255);
    margin: 0px;
    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    line-height: 32px;
    height: 32px;
  `
);

const AddCardCancel = styled("button")(
  `
  border-width: 0px;
    border-radius: 3px;
    font-size: 14px;
    color: rgb(255, 255, 255);
    margin: 0px;
    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    line-height: 32px;
    background-color: transparent;
    cursor: pointer;
    height: 32px;
    position: relative;
    width: 32px;

    span {
      margin-left: 4px;
      position: absolute;
      transform: translate(-50%, -50%) rotate(45deg);
      top: 50%;
      left: 50%;
      height: 20px;
      width: 20px;

      &::before {
        content: "";
        background-color: rgb(145, 145, 145);
        height: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: background 85ms ease-in 0s;
        width: 2px;

        &:hover {
          background-color: rgb(49, 49, 49);
        }
      }

      &::after {
        content: "";
        background-color: rgb(145, 145, 145);
        height: 2px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: background 85ms ease-in 0s;
        width: 20px;

        &:hover {
          background-color: rgb(49, 49, 49);
        }
      }
    }
  `
);

const AddCardContainerButton = styled("div")(
  `
    display: flex;
    margin-top: 4px;
  `
);

const AddCard = ({ children, idList, onAddCard }: AddCardProps) => {
  const [showForm, setshowForm] = useState<boolean>(false);
  const [newCardTitle, setNewCardTitle] = useState("");

  const handleAddCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (newCardTitle.trim()) {
      onAddCard(idList, newCardTitle);
      setNewCardTitle("");
      e.preventDefault();
    }
  };

  const toggleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    setshowForm(!showForm);
    e.preventDefault();
  };

  return (
    <AddCardWrapper>
      {!showForm ? (
        <AddCardButton onClick={toggleForm}>
          <span />
          {children}
        </AddCardButton>
      ) : (
        <div>
          <AddCardTextArea
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
          />
          <AddCardContainerButton>
            <AddCardSubmit type="submit" onClick={handleAddCard}>
              Ajouter une carte
            </AddCardSubmit>
            <AddCardCancel onClick={toggleForm}>
              <span />
            </AddCardCancel>
          </AddCardContainerButton>
        </div>
      )}
    </AddCardWrapper>
  );
};

export default AddCard;
