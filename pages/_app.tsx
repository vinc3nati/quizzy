import { TDataStore, TQuizQuestions, useDataStore } from "@/stores/dataStore";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { setQuestions, setQuestionsLoading } = useDataStore((state) => state);
  useEffect(() => {
    (async () => {
      try {
        setQuestionsLoading(true);
        const origin = window.location.origin;
        const resp = await fetch(`${origin}/api/getData`);
        const quizResponse = await resp.json();
        if (quizResponse?.quizzes)
          setQuestions(quizResponse?.quizzes?.questions);
        setQuestionsLoading(false);
      } catch (err) {
        // do something with error
        setQuestionsLoading(false);
        console.error(err);
      }
    })();
  }, []);
  return <Component {...pageProps} />;
}
