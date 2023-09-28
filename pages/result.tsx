import { useDataStore } from "@/stores/dataStore";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";

function Result() {
  const { answers, resetAnswers } = useDataStore((state) => state);
  const router = useRouter();

  const numberOfCorrectAnswers = useMemo(() => {
    return answers.reduce((acc, curr) => (curr.isCorrect ? acc + 1 : acc), 0);
  }, [answers]);

  const handlePlayAgain = () => {
    resetAnswers();
    router.push("/");
  };

  useEffect(() => {
    if (answers.length === 0) router.replace("/");
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-2">
      <h2 className="text-xl mb-2">
        Your score is{" "}
        <span className="font-bold text-blue-500">
          {numberOfCorrectAnswers}
        </span>
      </h2>
      <button
        onClick={handlePlayAgain}
        className="btn border border-blue-500 hover:bg-blue-500 transition-colors active:bg-blue-500"
      >
        Play Again
      </button>
    </section>
  );
}

export default Result;
