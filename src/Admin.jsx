import "./App.css";
import { useState } from "react";
import AddQuestion from "./AddQuestion";
import DeleteQuestion from "./DeleteQuestion";
import UpdateQuestion from "./UpdateQuestion";
import { NavLink, Outlet, Routes, Route } from "react-router-dom";
import SettingsNavBar from "./SettingsNavBar";
import { addQuestion } from "./redux/quiz";

export default function Admin() {
  return (
    <div className="adminPage">
      <SettingsNavBar />
      {/* <div>
        <ul>
          <li>
            <NavLink to="/admin/addquestion">Add Question</NavLink>
          </li>
          <li>
            <NavLink to="/admin/updatequestion">Update Question</NavLink>
          </li>
          <li>
            <NavLink to="/admin/deletequestion">Delete Question</NavLink>
          </li>
        </ul>
      </div> */}

      <Outlet />

      {/* <div>
        {console.log(questions)}
        {questions.map((question) => {
          return (
            <div
              style={{
                border: "1px solid white",
                padding: ".5em",
                marginTop: "1em",
              }}
              key={question.id}
            >
              <h2>{question.question}</h2>
              <h3>{question.answer1}</h3>
              <h3>{question.answer2}</h3>
              <h3>{question.answer3}</h3>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
