const QuizModel = {
  questions: [
    {
      question: "Which is the strongest devil fruit ?",
      questionId: "71850543-9797-4093-bc63-1e6b26df5d26",
      options: [
        {
          value: "Paramecia",
          isRight: false,
        },
        {
          value: "Logia",
          isRight: true,
        },
        {
          value: "Zoan",
          isRight: false,
        },
        {
          value: "Canon",
          isRight: false,
        },
      ],
    },
    {
      questionId: "71850543-9797-4093-bc63-1e6b26df5o98",
      question: "What is the total count of devil fruits ?",
      options: [
        {
          value: "191",
          isRight: true,
        },
        {
          value: "180",
          isRight: false,
        },
        {
          value: "78",
          isRight: false,
        },
        {
          value: "145",
          isRight: false,
        },
      ],
    },
    {
      question:
        "Which of the following devil fruit powers returned into circulation ?",
      questionId: "71850543-9797-4093-bc63-1e6b26df5a09",
      options: [
        {
          value: "Gas Gas Fruit",
          isRight: false,
        },
        {
          value: "Wax Wax Fruit",
          isRight: false,
        },
        {
          value: "Flame Flame Fruit",
          isRight: true,
        },
        {
          value: "Gum Gum Fruit",
          isRight: false,
        },
      ],
    },
    {
      question: "What is the consequence of devil fruit consumption ?",
      questionId: "71850543-9797-4093-bc63-1e6b26df5m80",
      options: [
        {
          value: "Increase in appetite",
          isRight: false,
        },
        {
          value: "Weakness to water",
          isRight: true,
        },
        {
          value: "Headache",
          isRight: false,
        },
        {
          value: "Fuzziness",
          isRight: false,
        },
      ],
    },
    {
      question: "Can a normal person eat more than 1 devil fruit ?",
      questionId: "71850543-9797-4093-bc63-1e6b26df5i18",
      options: [
        {
          value: "Yes",
          isRight: false,
        },
        {
          value: "No",
          isRight: true,
        },
      ],
    },
  ],
};

const getQuizData = () => {
  return QuizModel;
};

module.exports = getQuizData;
