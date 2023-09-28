import { StoreApi, create } from "zustand";

export type TQuizQuestions = {
  questionId: string;
  question: string;
  options: {
    value: string;
    isRight: boolean;
  }[];
};

type TAnswers = { questionId: string; answerIndex: number; isCorrect: boolean };

export type TDataStore = {
  questions: TQuizQuestions[] | null;
  setQuestions: (value: TQuizQuestions[]) => void;
  answers: TAnswers[];
  setAnswers: (value: TAnswers) => void;
  resetAnswers: () => void;
};

const store = (
  set: StoreApi<TDataStore>["setState"],
  get: StoreApi<TDataStore>["getState"]
): TDataStore => ({
  questions: null,
  setQuestions: (value) => set(() => ({ questions: value })),
  answers: [],
  setAnswers: (value) => {
    const { answers } = get();
    let newData: TAnswers[];
    if (answers.some((item) => item.questionId === value.questionId)) {
      newData = answers.map((item) =>
        item.questionId === value.questionId ? { ...item, ...value } : item
      );
    } else {
      newData = answers?.concat(value);
    }
    set(() => ({ answers: newData }));
  },
  resetAnswers: () => {
    set(() => ({ answers: [] }));
  },
});

export const useDataStore = create<TDataStore>(store);
