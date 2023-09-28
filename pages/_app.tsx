import { TDataStore, TQuizQuestions, useDataStore } from "@/stores/dataStore";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { setQuestions } = useDataStore((state) => state);
  useEffect(() => {
    (async () => {
      try {
        const origin = window.location.origin;
        const resp = await fetch(`${origin}/api/getData`);
        const quizResponse = await resp.json();
        if (quizResponse?.quizzes)
          setQuestions(quizResponse?.quizzes?.questions);
      } catch (err) {
        // do something with error
        console.error(err);
      }
    })();
  }, []);
  return <Component {...pageProps} />;
}
