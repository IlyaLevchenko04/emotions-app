// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { emotionStore } from "../store/EmotionStore";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    emotionStore.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
