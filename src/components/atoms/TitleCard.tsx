import { styled } from '@mui/system';
import React from 'react';

type TitleCardProps = {
    children: React.ReactNode;
}

const TitleCardWrapper = styled('div')(
    `
    padding: 10px 8px;
    position: relative;
    `,
);

const TitleCardContent = styled('div')(
    `
    color: rgb(49, 49, 49);
    font-size: 14px;
    font-weight: 600;
    padding-left: 8px;
    padding-right: 8px;
    line-height: 26px;
    `,
);

const TitleCardButton = styled('button')(
    `
    appearance: none;
    background-color: transparent;
    border: 0px;
    border-radius: 3px;
    cursor: pointer;
    position: absolute;
    height: 32px;
    width: 32px;
    padding: 0px;
    top: 6px;
    right: 8px;

    :hover {
        background-color: rgba(9, 30, 66, 0.13);
    }

    span {
        background-color: rgb(97, 97, 97);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -1.5px;
        margin-left: -1.5px;
        height: 3px;
        width: 3px;

        &::before {
            content: "";
            background-color: rgb(97, 97, 97);
            border-radius: 50%;
            position: absolute;
            left: -6px;
            height: 3px;
            width: 3px;
        }

        &::after {
            content: "";
            background-color: rgb(97, 97, 97);
            border-radius: 50%;
            position: absolute;
            right: -6px;
            height: 3px;
            width: 3px;
        }
    }
    `,
);

const TitleCard = ({children}: TitleCardProps) => {
  return (
    <TitleCardWrapper>
        <TitleCardContent>
            {children}
            <TitleCardButton>
                <span />
            </TitleCardButton>
        </TitleCardContent>
    </TitleCardWrapper>
  )
}

export default TitleCard
