import QuizSkeleton from "@/components/QuestionSkeleton";
import { useDataStore } from "@/stores/dataStore";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const { questions, setAnswers, answers, questionsLoading } = useDataStore(
    (state) => state
  );
  const [activeQuestionNumber, setActiveQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  const router = useRouter();

  const activeQuestion = useMemo(() => {
    return questions?.[activeQuestionNumber];
  }, [questions, activeQuestionNumber]);

  const goToPrevQuestion = () => {
    setActiveQuestionNumber((prev) => prev - 1);
  };

  const goToNextQuestion = () => {
    setActiveQuestionNumber((prev) => prev + 1);
  };

  const navigateToResult = () => {
    router.push("/result");
  };

  const handleCheckAnswer = ({
    isCorrect,
    idx,
    qId,
  }: {
    isCorrect: boolean;
    idx: number;
    qId: string;
  }) => {
    setSelectedAnswer(idx);
    setAnswers({ answerIndex: idx, isCorrect, questionId: qId });
  };

  useEffect(() => {
    // If we have previously selected answer we use that answer's index else we default to -1
    const prevSelectedAnswer = answers.find(
      (it) => it.questionId === questions?.[activeQuestionNumber].questionId
    );
    setSelectedAnswer(() =>
      !prevSelectedAnswer ? -1 : prevSelectedAnswer.answerIndex
    );
  }, [activeQuestionNumber]);

  return (
    <section
      className={`flex min-h-screen flex-col items-center md:justify-center p-24 px-2`}
    >
      {questionsLoading ? (
        <QuizSkeleton />
      ) : (
        <main className="relative w-full max-w-[500px]">
          <p className="text-sm font-light">
            {activeQuestionNumber + 1} / {questions?.length}
          </p>
          <header className="text-2xl">{activeQuestion?.question}</header>
          <ul className="min-h-[10rem] mt-2">
            {activeQuestion?.options.map((opt, idx) => (
              <li
                key={opt.value}
                onClick={() => {
                  handleCheckAnswer({
                    isCorrect: opt.isRight,
                    idx,
                    qId: activeQuestion.questionId,
                  });
                }}
                className={`px-1.5 py-2 border rounded my-2 cursor-pointer ${
                  idx === selectedAnswer ? "bg-blue-500" : ""
                }`}
              >
                {opt.value}
              </li>
            ))}
          </ul>
          {/* Buttons */}
          <div className="w-[full] flex justify-between mt-5">
            <button
              disabled={activeQuestionNumber === 0}
              onClick={goToPrevQuestion}
              className="btn border disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {"<< prev"}
            </button>
            {activeQuestionNumber !== (questions?.length ?? 0) - 1 ? (
              <button
                disabled={selectedAnswer === -1}
                onClick={goToNextQuestion}
                className="btn border disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {"next >>"}
              </button>
            ) : (
              <button
                disabled={selectedAnswer === -1}
                className="btn bg-blue-500 disabled:opacity-70 disabled:cursor-not-allowed"
                onClick={navigateToResult}
              >
                Check Score
              </button>
            )}
          </div>
        </main>
      )}
    </section>
  );
}
