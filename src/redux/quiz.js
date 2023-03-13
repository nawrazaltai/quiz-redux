import { createReduxModule } from "hooks-for-redux";

const state = {
  questions: [
    {
      question: "3+2=?",
      answer1: "5",
      answer2: "3",
      answer3: "8",
      correctAnswer: "5",
      id: 0,
    },
    {
      question: "What is the smallest US state by area?",
      answer1: "Texas",
      answer2: "Florida",
      answer3: "Rhode Island",
      correctAnswer: "Rhode Island",
      id: 1,
    },
    {
      question: "How many stars are on the Chinese flag?",
      answer1: "6",
      answer2: "5",
      answer3: "3",
      correctAnswer: "5",
      id: 2,
    },
    {
      question: "How many hearts does an octopus have?",
      answer1: "1",
      answer2: "2",
      answer3: "3",
      correctAnswer: "3",
      id: 3,
    },
    {
      question: "What country drinks the most coffee?",
      answer1: "Sweden",
      answer2: "Canada",
      answer3: "Finland",
      correctAnswer: "Finland",
      id: 4,
    },
    {
      question: "Pink Ladies and Granny Smiths are types of what fruit?",
      answer1: "Banana",
      answer2: "Apple",
      answer3: "Melon",
      correctAnswer: "Apple",
      id: 5,
    },
    {
      question: "Who was the first Disney princess?",
      answer1: "Snow White",
      answer2: "Elsa",
      answer3: "Jasmine",
      correctAnswer: "Snow White",
      id: 6,
    },
    {
      question: "Where is Disney's European theme park located?",
      answer1: "Paris, France",
      answer2: "Madrid, Spain",
      answer3: "Berlin, Germany",
      correctAnswer: "Paris, France",
      id: 7,
    },
    {
      question: "In what country was Elon Musk born?",
      answer1: "Canada",
      answer2: "USA",
      answer3: "South Africa",
      correctAnswer: "South Africa",
      id: 8,
    },
    {
      question: "Which is the only body part that is fully grown from birth?",
      answer1: "Nails",
      answer2: "Eyes",
      answer3: "Ears",
      correctAnswer: "Eyes",
      id: 9,
    },
  ],
  score: 0,
  currentQuestionIndex: 0,
  quizStarted: false,
  showResult: false,
};

export const [
  useQuestions,
  {
    addQuestion,
    deleteQuestion,
    updateQuestion,
    currentQuestionIndex,
    updateQuestionIndex,
    score,
    updateScore,
    quizStarted,
    updateStartState,
    showResult,
    updateShowResult,
  },
] = createReduxModule("questions", state, {
  addQuestion: (state, payload) => {
    return {
      ...state,
      questions: [
        ...state.questions,
        {
          id: Date.now(),
          question: payload.question,
          answer1: payload.answer1,
          answer2: payload.answer2,
          answer3: payload.answer3,
          correctAnswer: payload.correctAnswer,
        },
      ],
    };
  },
  deleteQuestion: (state, payload) => {
    return {
      ...state,
      questions: state.questions.filter((question) => {
        return question.question != payload.question;
      }),
    };
  },
  updateQuestion: (state, payload) => {
    return {
      ...state,
      questions: state.questions.map((question) => {
        if (payload.id == question.id) {
          return {
            ...question,
            question: payload.question,
            answer1: payload.answer1,
            answer2: payload.answer2,
            answer3: payload.answer3,
            correctAnswer: payload.correctAnswer,
          };
        }
        return question;
      }),
    };
  },
  updateQuestionIndex: (state, payload) => {
    return { ...state, currentQuestionIndex: payload };
  },
  updateScore: (state, payload) => {
    return { ...state, score: payload.score };
  },
  updateStartState: (state, payload) => {
    return { ...state, quizStarted: !payload };
  },
  updateShowResult: (state, payload) => {
    return { ...state, showResult: !payload };
  },
});
