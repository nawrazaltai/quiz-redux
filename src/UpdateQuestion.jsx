import "./App.css";
import { useEffect, useState } from "react";
import { updateQuestion, useQuestions } from "./redux/quiz";

export default function UpdateQuestion() {
  const { questions } = useQuestions();
  //   console.log(questions);

  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [id, setID] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked handleSubmit");
    updateQuestion({
      question: question,
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      correctAnswer: correctAnswer,
      id: id,
    });
  }

  function handleChange(e) {
    const questionID = Number(e.target.value);
    const obj = questions.find((q) => q.id == questionID);
    setQuestion(obj.question);
    setAnswer1(obj.answer1);
    setAnswer2(obj.answer2);
    setAnswer3(obj.answer3);
    setCorrectAnswer(obj.correctAnswer);
    setID(obj.id);
  }

  return (
    <div className="updateContainer">
      {/* <select
        onChange={handleChange}
        name="questionSelect"
        className="selectUpdate"
      >
        <option hidden>Select question to update ({questions.length})</option>
        {questions.map((question) => {
          return (
            <option key={question.id} value={question.id}>
              {question.question}
            </option>
          );
        })}
      </select> */}

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
        action="submit"
        className="updateForm"
      >
        <h1 className="form-title">Update Questions</h1>

        <select
          onChange={handleChange}
          name="questionSelect"
          className="selectUpdate"
        >
          <option hidden>Select question to update ({questions.length})</option>
          {questions.map((question) => {
            return (
              <option key={question.id} value={question.id}>
                {question.question}
              </option>
            );
          })}
        </select>

        <label htmlFor="question">Question</label>
        <input
          required
          type="text"
          name="question"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />

        <label htmlFor="answer1">Answer 1</label>
        <input
          required
          type="text"
          name="answer1"
          value={answer1}
          onChange={(e) => {
            setAnswer1(e.target.value);
          }}
        />

        <label htmlFor="answer2">Answer 2</label>
        <input
          required
          type="text"
          name="answer2"
          value={answer2}
          onChange={(e) => {
            setAnswer2(e.target.value);
          }}
        />

        <label htmlFor="answer3">Answer 3</label>
        <input
          required
          type="text"
          name="answer3"
          value={answer3}
          onChange={(e) => {
            setAnswer3(e.target.value);
          }}
        />

        <label htmlFor="correctAnswer">Correct answer</label>
        <input
          required
          type="text"
          name="correctAnswer"
          value={correctAnswer}
          onChange={(e) => {
            setCorrectAnswer(e.target.value);
          }}
        />

        <button className="update-btn" type="submit">
          Update Question
        </button>
      </form>
    </div>
  );
}
