import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { EmotionEnum } from "../../shared/types/emotion";
import { emotionMeta } from "../EmotionIcons";

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (type: EmotionEnum, comment: string) => void;
}

export const AddEmotionModal: React.FC<Props> = ({ open, onClose, onAdd }) => {
  const [selected, setSelected] = useState<EmotionEnum | null>(null);
  const [comment, setComment] = useState("");

  const handleAdd = () => {
    if (selected) {
      onAdd(selected, comment);
      setSelected(null);
      setComment("");
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="absolute top-1/2 left-1/2 bg-white rounded-lg shadow-lg p-6 w-[calc(100%-2rem)] max-w-[820px]" style={{ transform: "translate(-50%, -50%)" }}>
        <div className="mb-4 font-bold text-lg">Оберіть емоцію</div>
        <div className="flex-col md:flex-row flex gap-2 mb-4">
          {Object.entries(emotionMeta).map(([key, meta]) => (
            <Button
              key={key}
              variant={selected === key ? "contained" : "outlined"}
              onClick={() => setSelected(key as EmotionEnum)}
              startIcon={meta.icon}
            >
              {meta.label}
            </Button>
          ))}
        </div>
        <div className="mb-4">
        <TextField
          label="Коментар"
          fullWidth
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={onClose}>Скасувати</Button>
          <Button onClick={handleAdd} variant="contained" disabled={!selected}>
            Додати
          </Button>
        </div>
      </Box>
    </Modal>
  );
};