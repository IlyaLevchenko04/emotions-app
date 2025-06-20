import { makeAutoObservable, runInAction } from "mobx";
import { Emotion, EmotionEnum } from "../shared/types/emotion";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "emotions";

class EmotionStore {
  emotions: Emotion[] = [];
  hydrated = false;

  constructor() {
    makeAutoObservable(this);
  }

  init() {
    if (typeof window === "undefined") return;

    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed: Emotion[] = JSON.parse(data);
        runInAction(() => {
          this.emotions = parsed;
        });
      }
    } catch (e) {
      console.warn("Failed to load emotions from localStorage", e);
    } finally {
      this.hydrated = true;
    }
  }

  addEmotion(type: EmotionEnum, comment: string) {
    const emotion: Emotion = {
      id: uuidv4(),
      type,
      comment,
      date: new Date().toISOString(),
    };
  
    this.emotions = [emotion, ...this.emotions];
    this.save();
  }

  removeEmotion(id: string) {
    this.emotions = this.emotions.filter((e) => e.id !== id);
    this.save();
  }

  reorderEmotions(startIndex: number, endIndex: number) {
    const [removed] = this.emotions.splice(startIndex, 1);
    this.emotions.splice(endIndex, 0, removed);
    this.save();
  }

  clearAll() {
    this.emotions = [];
    this.save();
  }

  private save() {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.emotions));
    } catch (e) {
      console.warn("Failed to save emotions to localStorage", e);
    }
  }
}

export const emotionStore = new EmotionStore();
