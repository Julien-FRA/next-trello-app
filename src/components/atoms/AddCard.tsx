import { styled } from '@mui/system';
import React, { useState } from 'react';

type AddCardProps = {
    children: React.ReactNode;
    onSubmit: (text: string) => void;
}

const AddCardWrapper = styled('form')(
    `
    -webkit-box-direction: normal !important;
    -webkit-box-orient: vertical !important;
    display: flex !important;
    flex-direction: column !important;
    padding: 8px !important;
    `,
);

const AddCardButton = styled('button')(
    `
    -webkit-box-align: center !important;
    border-width: 0px !important;
    border-radius: 3px !important;
    cursor: pointer !important;
    font-size: 14px !important;
    margin: 0px !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
    outline: none !important;
    align-items: center !important;
    color: rgb(97, 97, 97) !important;
    background-color: transparent !important;
    display: flex !important;
    height: 30px !important;
    line-height: 30px !important;
    text-align: left !important;

    &:hover {
        background-color: rgba(9, 30, 66, 0.08) !important;
    }

    span {
        margin-right: 4px !important;
        position: relative !important;
        height: 20px !important;
        width: 20px !important;

        &::before {
            content: "" !important;
            background-color: rgb(97, 97, 97) !important;
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
            background-color: rgb(97, 97, 97) !important;
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

const AddCardTextArea = styled('textarea')(
  `
    appearance: none !important;
    border-radius: 3px !important;
    border-width: 0px !important;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 0px !important;
    font-size: 14px !important;
    min-height: 72px !important;
    padding-top: 8px !important;
    padding-left: 8px !important;
    padding-right: 8px !important;
    width: 100% !important;
  `,
);

const AddCardSubmit = styled('button')(
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

const AddCardCancel = styled('button')(
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

const AddCardContainerButton = styled('div')(
  `
    display: flex !important;
    margin-top: 4px !important;
  `,
);


const AddCard = ({children, onSubmit}: AddCardProps) => {
  const [ showForm, setshowForm] = useState<boolean>(false);
  const [ data, setData ] = useState<string>('');

  const toggleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    setshowForm(!showForm);
    e.preventDefault();
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(event.target.value);
  };
  
  return (
    <AddCardWrapper onSubmit={handleSubmit}>
      {
        !showForm ? (
          <AddCardButton onClick={toggleForm}>
          <span />
          {children}
        </AddCardButton>
        ) : (
          <div>
            <AddCardTextArea value={data} onChange={handleChange} />
            <AddCardContainerButton>
              <AddCardSubmit type='submit'>Ajouter une carte</AddCardSubmit>
              <AddCardCancel onClick={toggleForm}>
                <span />
              </AddCardCancel>
            </AddCardContainerButton>
          </div>
        )
      }
    </AddCardWrapper>
  )
}

export default AddCard
