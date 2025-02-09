import { styled } from "@mui/system";
import React, { useState } from "react";

type AddListProps = {
  children: React.ReactNode;
  addList: (title: string) => void;
};

const AddListWrapper = styled("div")(
  `
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    display: flex;
    flex-direction: column;
    margin-left: 4px;
    margin-right: 4px;
    width: 272px;

    &:last-child {
        margin-right: 8px;
    }
    `
);

const AddListContainer = styled("form")(
  `
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    background-color: rgba(255, 255, 255, 0.24);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    transition: background 85ms ease-in 0s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.32);
    }

    &.active {
        -webkit-box-direction: normal;
        -webkit-box-orient: vertical;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        transition: background 85ms ease-in 0s;
        background-color: rgb(235, 236, 240);
        padding: 4px;
    }
    `
);

const AddListButton = styled("button")(
  `
    -webkit-box-align: center;
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
    align-items: center;
    background-color: transparent;
    display: flex;
    height: 40px;
    text-align: left;

    &:hover {
        background-color: transparent;    
    }

    span {
        margin-right: 4px;
        position: relative;
        height: 20px;
        width: 20px;

        &::before {
            content: "";
            background-color: rgb(255, 255, 255);
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
            background-color: rgb(255, 255, 255);
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

const AddListInput = styled("input")(
  `
    border-style: solid;
    border-color: transparent;
    border-radius: 3px;
    height: 36px;
    margin: 0px;
    padding-left: 12px;
    padding-right: 12px;
    outline: 0px;
    width: 100%;
    border-width: 0px;
    box-shadow: rgb(0, 121, 191) 0px 0px 0px 2px inset;
    `
);

const AddListSubmit = styled("button")(
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

const AddListCancel = styled("button")(
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

const AddListContainerButton = styled("div")(
  `
      display: flex;
      margin-top: 4px;
    `
);

const AddList = ({ children, addList }: AddListProps) => {
  const [showForm, setshowForm] = useState(false);
  const [inputText, setInputText] = useState("");

  const submission = (e: any) => {
    e.preventDefault();
    if (inputText) {
      setInputText("");
      addList(inputText);
    }
  };

  const addListData = (e: React.MouseEvent<HTMLButtonElement>) => {
    setshowForm(!showForm);
    e.preventDefault();
  };

  return (
    <AddListWrapper>
      <AddListContainer
        className={showForm ? "active" : ""}
        onSubmit={submission}
      >
        {!showForm ? (
          <AddListButton onClick={addListData}>
            <span />
            {children}
          </AddListButton>
        ) : (
          <div>
            <AddListInput onChange={(e) => setInputText(e.target.value)} />
            <AddListContainerButton>
              <AddListSubmit type="submit">Ajouter une carte</AddListSubmit>
              <AddListCancel onClick={addListData}>
                <span />
              </AddListCancel>
            </AddListContainerButton>
          </div>
        )}
      </AddListContainer>
    </AddListWrapper>
  );
};

export default AddList;
