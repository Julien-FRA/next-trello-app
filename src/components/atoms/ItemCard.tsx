import { styled } from "@mui/system";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

type ItemCardProps = {
  idList: number;
  idCard: number;
  titleCard: string;
  descCard?: string;
  followedCard: boolean;
  onUpdateCard: (
    idList: number,
    idCard: number,
    newTitle: string,
    newDasc: string
  ) => void;
  onDeleteCard: (idList: number, idCard: number) => void;
};

const ItemCardWrapper = styled("div")(
  `
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 0px;
    cursor: pointer;
    margin-bottom: 8px;

    &:hover {
        background-color: rgb(244, 245, 247);
    }
    `
);

const ItemCardButton = styled("button")(
  `
    border-width: 0px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
    color: rgb(255, 255, 255);
    margin: 0px;
    outline: none;
    background-color: transparent;
    height: auto;
    line-height: 1;
    padding: 0px;
    width: 100%;
    `
);

const ItemCardText = styled("h2")(
  `
    -webkit-box-align: center;
    align-items: center;
    color: rgb(49, 49, 49);
    display: flex;
    font-size: 14px;
    font-weight: 400;
    height: 32px;
    line-height: 20px;
    margin: 0px;
    padding-left: 8px;
    padding-right: 8px;
    text-align: left;
    `
);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ItemCard = ({
  titleCard,
  idCard,
  idList,
  descCard,
  followedCard,
  onUpdateCard,
  onDeleteCard,
}: ItemCardProps) => {
  const [updatedCardTitle, setUpdatedCardTitle] = useState<string>("");
  const [updatedCardDesc, setUpdatedCardDesc] = useState<string>("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdateCard = (cardId: number) => {
    if (updatedCardTitle.trim()) {
      onUpdateCard(idList, cardId, updatedCardTitle, updatedCardDesc);
    }
  };

  const handleDeleteCard = (cardId: number) => {
    onDeleteCard(idList, cardId);
  };

  return (
    <ItemCardWrapper>
      <ItemCardButton onClick={handleOpen}>
        <ItemCardText>{titleCard}</ItemCardText>
      </ItemCardButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {titleCard}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {descCard}
          </Typography>
          <div>
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              type="text"
              value={updatedCardTitle}
              onChange={(e) => setUpdatedCardTitle(e.target.value)}
              placeholder="Nouveau titre de la carte"
              sx={{ mt: 2, mr: 4 }}
            />
            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              type="text"
              value={updatedCardDesc}
              onChange={(e) => setUpdatedCardDesc(e.target.value)}
              placeholder="Nouvelle description de la carte"
              sx={{ mt: 2 }}
            />
          </div>
          <Button
            onClick={() => handleUpdateCard(idCard)}
            sx={{ mt: 2, mr: 4 }}
          >
            Mettre à jour
          </Button>
          <Button onClick={() => handleDeleteCard(idCard)} sx={{ mt: 2 }}>
            Supprimer la card
          </Button>
          <div></div>
        </Box>
      </Modal>
    </ItemCardWrapper>
  );
};

export default ItemCard;
