export enum EmotionEnum {
    JOY = "joy",
    SADNESS = "sadness",
    ANGER = "anger",
    SURPRISE = "surprise",
    CALM = "calm"
}

export interface Emotion {
  id: string;
  type: EmotionEnum;
  comment: string;
  date: string;
}