import { styled } from '@mui/system';
import React, { useState } from 'react';

type AddListProps = {
    children: React.ReactNode;
}

const AddListWrapper = styled('div')(
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
    `,
);

const AddListContainer = styled('form')(
    `
    -webkit-box-direction: normal !important;
    -webkit-box-orient: vertical !important;
    background-color: rgba(255, 255, 255, 0.24) !important;
    border-radius: 3px !important;
    display: flex !important;
    flex-direction: column !important;
    transition: background 85ms ease-in 0s !important;

    &:hover {
        background-color: rgba(255, 255, 255, 0.32) !important;
    }

    &.active {
        -webkit-box-direction: normal !important;
        -webkit-box-orient: vertical !important;
        border-radius: 3px !important;
        display: flex !important;
        flex-direction: column !important;
        transition: background 85ms ease-in 0s !important;
        background-color: rgb(235, 236, 240) !important;
        padding: 4px !important;
    }
    `,
);

const AddListButton = styled('button')(
    `
    -webkit-box-align: center !important;
    border-width: 0px !important;
    border-radius: 3px !important;
    cursor: pointer !important;
    font-size: 14px !important;
    color: rgb(255, 255, 255) !important;
    margin: 0px !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
    outline: none !important;
    line-height: 32px !important;
    align-items: center !important;
    background-color: transparent !important;
    display: flex !important;
    height: 40px !important;
    text-align: left !important;

    &:hover {
        background-color: transparent !important;    
    }

    span {
        margin-right: 4px !important;
        position: relative !important;
        height: 20px !important;
        width: 20px !important;

        &::before {
            content: "" !important;
            background-color: rgb(255, 255, 255) !important;
            height: 12px !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            transition: background 85ms ease-in 0s !important;
            width: 2px !important;
        }

        &::after {
            content: "" !important;
            background-color: rgb(255, 255, 255) !important;
            height: 2px !important;
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            transition: background 85ms ease-in 0s !important;
            width: 12px !important;
        }
    }
    `,
);

const AddListInput = styled('input')(
    `
    border-style: solid !important;
    border-color: transparent !important;
    border-radius: 3px !important;
    height: 36px !important;
    margin: 0px !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
    outline: 0px !important;
    width: 100% !important;
    border-width: 0px !important;
    box-shadow: rgb(0, 121, 191) 0px 0px 0px 2px inset !important;
    `,
  );
  
  const AddListSubmit = styled('button')(
    `
      background-color: rgb(90, 172, 68) !important;
      border-width: 0px !important;
      border-radius: 3px !important;
      cursor: pointer !important;
      font-size: 14px !important;
      color: rgb(255, 255, 255) !important;
      margin: 0px !important;
      padding-left: 12px !important;
      padding-right: 12px !important;
      outline: none !important;
      line-height: 32px !important;
      height: 32px !important;
    `,
  );
  
  const AddListCancel = styled('button')(
    `
    border-width: 0px !important;
      border-radius: 3px !important;
      font-size: 14px !important;
      color: rgb(255, 255, 255) !important;
      margin: 0px !important;
      padding-left: 12px !important;
      padding-right: 12px !important;
      outline: none !important;
      line-height: 32px !important;
      background-color: transparent !important;
      cursor: pointer !important;
      height: 32px !important;
      position: relative !important;
      width: 32px !important;
  
      span {
        margin-left: 4px !important;
        position: absolute !important;
        transform: translate(-50%, -50%) rotate(45deg) !important;
        top: 50% !important;
        left: 50% !important;
        height: 20px !important;
        width: 20px !important;
  
        &::before {
          content: "" !important;
          background-color: rgb(145, 145, 145) !important;
          height: 20px !important;
          position: absolute !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          transition: background 85ms ease-in 0s !important;
          width: 2px !important;
  
          &:hover {
            background-color: rgb(49, 49, 49) !important;
          }
        }
  
        &::after {
          content: "" !important;
          background-color: rgb(145, 145, 145) !important;
          height: 2px !important;
          position: absolute !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          transition: background 85ms ease-in 0s !important;
          width: 20px !important;
  
          &:hover {
            background-color: rgb(49, 49, 49) !important;
          }
        }
      }
    `,
  );
  
  const AddListContainerButton = styled('div')(
    `
      display: flex !important;
      margin-top: 4px !important;
    `,
  );

const AddList = ({children}: AddListProps) => {
    const [ showForm, setshowForm] = useState(false);

    const addListData = (e: React.MouseEvent<HTMLButtonElement>) => {
      setshowForm(!showForm);
      e.preventDefault();
    }

  return (
    <AddListWrapper>
        <AddListContainer className={showForm ? 'active' : ''}>
            {
                !showForm ? (
                <AddListButton type='submit' onClick={addListData}>
                <span />
                {children}
                </AddListButton>
                ) : (
                <div>
                    <AddListInput />
                    <AddListContainerButton>
                        <AddListSubmit>Ajouter une carte</AddListSubmit>
                        <AddListCancel onClick={addListData}>
                            <span />
                        </AddListCancel>
                    </AddListContainerButton>
                </div>
                )
            }
        </AddListContainer>
    </AddListWrapper>
  )
}

export default AddList
