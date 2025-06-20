import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { EmotionBoard } from "../features/EmotionBoard";
import { AddEmotionModal } from "../components/AddEmotionModal";
import { emotionStore } from "../store/EmotionStore";
import Button from "@mui/material/Button";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import dynamic from "next/dynamic";

const Home = observer(() => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Дошка емоцій</h1>
          <div className="flex gap-2">
            <Button variant="contained" onClick={() => setModalOpen(true)}>
              Додати емоцію
            </Button>
            {emotionStore.emotions.length > 0 && (
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteSweepIcon />}
                onClick={() => emotionStore.clearAll()}
              >
                Очистити всі
              </Button>
            )}
          </div>
        </div>
        <EmotionBoard />
        <AddEmotionModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onAdd={(type, comment) => emotionStore.addEmotion(type, comment)}
        />
      </div>
    </div>
  );
});

export default dynamic(() => Promise.resolve(Home), { ssr: false });