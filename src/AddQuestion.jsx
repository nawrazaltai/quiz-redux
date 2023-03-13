import "./App.css";
import { useState } from "react";
import { addQuestion } from "./redux/quiz";

export default function AddQuestion() {
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addQuestion({ question, answer1, answer2, answer3, correctAnswer });
  }

  return (
    <div className="addContainer">
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
        action="submit"
        className="addForm"
      >
        <div>
          <h1 className="form-title">Add Questions</h1>
        </div>

        <label htmlFor="question">Question</label>
        <input
          required
          type="text"
          name="question"
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />

        <label htmlFor="answer1">Answer 1</label>
        <input
          required
          type="text"
          name="answer1"
          onChange={(e) => {
            setAnswer1(e.target.value);
          }}
        />

        <label htmlFor="answer2">Answer 2</label>
        <input
          required
          type="text"
          name="answer2"
          onChange={(e) => {
            setAnswer2(e.target.value);
          }}
        />

        <label htmlFor="answer3">Answer 3</label>
        <input
          required
          type="text"
          name="answer3"
          onChange={(e) => {
            setAnswer3(e.target.value);
          }}
        />

        <label htmlFor="correctAnswer">Correct answer</label>
        <input
          required
          type="text"
          name="correctAnswer"
          onChange={(e) => {
            setCorrectAnswer(e.target.value);
          }}
        />
        <button className="submit-btn" type="submit">
          Add Question
        </button>
      </form>
    </div>
  );
}
