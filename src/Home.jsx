import { Outlet, Route, Routes, NavLink } from "react-router-dom";
import { useQuestions, updateStartState } from "./redux/quiz";

import Admin from "./Admin";
import Quiz from "./Quiz";

export default function Home() {
  const { questions, quizStarted } = useQuestions();

  {
    /* <Admin /> */
  }
  {
    /* <button
        onClick={() => {
          updateStartState(quizStarted);
        }}
        style={{
          display: `${quizStarted ? "none" : "block"}`,
          height: "3em",
          pointerEvents: `${questions.length > 0 ? "auto" : "none"}`,
        }}
      >
        Start Quiz!
      </button>
      {quizStarted && <Quiz />} */
  }

  return (
    <div className="homeContainer">
      <div className="home-info-div">
        <div className="home-text">
          <h1>
            Welcome to <span style={{ color: "#FEDE9A" }}>MyQuiz!</span>{" "}
          </h1>
          <p>
            The Quiz has 10 default questions with different random categories,
            but you can easily add, change and delete questions in the settings.
            <br />
            Enjoy and Good Luck!
          </p>
        </div>
        <div className="homeOptions">
          <ul className="home-options-ul">
            <li>
              <NavLink to={"/admin"}>
                <button className="settingsNavLink">Settings</button>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ pointerEvents: questions.length > 0 ? "" : "none" }}
                to={"/quiz"}
              >
                <button
                  onClick={() => {
                    updateStartState(quizStarted);
                  }}
                  className={`startQuizNavLink ${
                    questions.length > 0 ? "" : "start-quiz-inactive"
                  }`}
                >
                  Start Quiz!
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
