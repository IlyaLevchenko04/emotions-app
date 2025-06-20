import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Emotion } from "../../shared/types/emotion";
import { emotionMeta } from "../EmotionIcons";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from "date-fns";

interface Props {
  emotion: Emotion;
  onDelete: () => void;
  onSwipeLeft?: () => void;
}

export const EmotionCard: React.FC<Props> = ({ emotion, onDelete, onSwipeLeft }) => {
  const meta = emotionMeta[emotion.type];
  const controls = useAnimation();
  const touchStartX = React.useRef<number | null>(null);
  const isDragging = React.useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const moveX = e.touches[0].clientX;
    if (touchStartX.current !== null && Math.abs(touchStartX.current - moveX) > 10) {
      isDragging.current = true;
    }
  };

  const handleTouchEnd = async (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const diff = touchStartX.current! - e.changedTouches[0].clientX;

    if (diff > 80 && onSwipeLeft) {
      await controls.start({ x: -500, opacity: 0 });
      onSwipeLeft();
    }

    touchStartX.current = null;
    isDragging.current = false;
  };

  return (
    <motion.div
      className={`rounded-lg shadow-md p-4 flex items-center gap-4 ${meta.color} relative h-full`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      animate={controls}
      initial={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div>{meta.icon}</div>
      <div className="flex-1">
        <div className="font-bold">{meta.label}</div>
        <div className="text-sm text-gray-700">{emotion.comment}</div>
        <div className="text-xs text-gray-500">
          {format(new Date(emotion.date), "yyyy-MM-dd HH:mm")}
        </div>
      </div>
      <IconButton
        onClick={onDelete}
        size="small"
        aria-label="delete"
        className="hidden sm:inline-flex"
      >
        <DeleteIcon />
      </IconButton>
    </motion.div>
  );
};
