import { useState } from "react";
import "./App.css";
import Admin from "./Admin";
import Quiz from "./Quiz";
import { useQuestions, updateStartState } from "./redux/quiz";
import { Outlet, Route, Routes, NavLink } from "react-router-dom";
import Home from "./Home";
import AddQuestion from "./AddQuestion";
import UpdateQuestion from "./UpdateQuestion";
import DeleteQuestion from "./DeleteQuestion";

function App() {
  const { questions, quizStarted } = useQuestions();

  return (
    <div className="App">
      {/* <Admin /> */}
      {/* <button
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
      {quizStarted && <Quiz />} */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="addquestion" element={<AddQuestion />} />
          <Route path="updatequestion" element={<UpdateQuestion />}></Route>
          <Route path="deletequestion" element={<DeleteQuestion />}></Route>
        </Route>
        <Route path="quiz" element={<Quiz />}></Route>
      </Routes>
    </div>
  );
}

export default App;
