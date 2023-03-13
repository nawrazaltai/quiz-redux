import "./App.css";
import { useEffect, useState } from "react";
import { NavLink, Outlet, Routes, Route } from "react-router-dom";
import {
  useQuestions,
  updateQuestionIndex,
  updateScore,
  updateStartState,
  updateShowResult,
} from "./redux/quiz";

import resultImg from "./assets/result.svg";

export default function Result() {
  const { questions, score, quizStarted, showResult } = useQuestions();

  return (
    <div className="result-container">
      <div className="result-div">
        <img src={resultImg} alt="" />
        <div className="result-info">
          <h2>Well played!</h2>
          <h1>
            Your scored: {score} / {questions.length}
          </h1>
        </div>

        <NavLink to={"/"}>
          <button
            className="result-btn"
            onClick={() => {
              updateScore({ score: 0 });
              updateStartState(quizStarted);
              updateQuestionIndex(0);
              updateShowResult(showResult);
            }}
          >
            Back To Main Menu
          </button>
        </NavLink>
      </div>
    </div>
  );
}
