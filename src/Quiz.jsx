import "./App.css";
import { useEffect, useState } from "react";
import {
  useQuestions,
  updateQuestionIndex,
  updateScore,
  updateStartState,
  updateShowResult,
} from "./redux/quiz";
import Result from "./Result";

export default function Quiz() {
  const { questions, currentQuestionIndex, score, showResult } = useQuestions();

  const title = questions[currentQuestionIndex].question;
  const questionsArr = [
    questions[currentQuestionIndex].answer1,
    questions[currentQuestionIndex].answer2,
    questions[currentQuestionIndex].answer3,
  ];
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  function handleAnswer(e) {
    const guess = e.target.textContent;
    if (currentQuestionIndex == questions.length - 1) {
      if (guess == correctAnswer) {
        updateScore({ score: score + 1 });
        updateShowResult(showResult);
      } else {
        updateShowResult(showResult);
      }
    } else if (currentQuestionIndex != questions.length - 1) {
      if (guess == correctAnswer) {
        updateQuestionIndex(currentQuestionIndex + 1);
        updateScore({ score: score + 1 });
      } else {
        updateQuestionIndex(currentQuestionIndex + 1);
      }
    }
  }

  return (
    <div className="questionsContainer">
      <div className="questions-main-div">
        <div className="question">
          <h1>Question {currentQuestionIndex + 1}</h1>
          <h2>{title}</h2>
        </div>
        <div className="answersDiv">
          {questionsArr.map((q, index) => {
            return (
              <span key={index} onClick={handleAnswer}>
                {q}
              </span>
            );
          })}
        </div>
        <div className="score-div">
          <p>Score: {score}</p>
          <p>Questions left: {questions.length - (currentQuestionIndex + 1)}</p>
        </div>
      </div>

      {showResult && <Result />}
    </div>
  );
}
