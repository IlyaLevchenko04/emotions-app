import React from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { EmotionEnum } from "../../shared/types/emotion";

export const emotionMeta: Record<EmotionEnum, { label: string; color: string; icon: React.ReactNode }> = {
  joy: {
    label: "Радість",
    color: "bg-yellow-200",
    icon: <SentimentVerySatisfiedIcon color="warning" fontSize="large" />,
  },
  sadness: {
    label: "Смуток",
    color: "bg-blue-200",
    icon: <SentimentDissatisfiedIcon color="primary" fontSize="large" />,
  },
  anger: {
    label: "Злість",
    color: "bg-red-200",
    icon: <SentimentVeryDissatisfiedIcon color="error" fontSize="large" />,
  },
  surprise: {
    label: "Подив",
    color: "bg-purple-200",
    icon: <SentimentSatisfiedAltIcon color="secondary" fontSize="large" />,
  },
  calm: {
    label: "Спокій",
    color: "bg-green-200",
    icon: <SelfImprovementIcon color="success" fontSize="large" />,
  },
};