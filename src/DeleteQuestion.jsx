import "./App.css";
import { useState } from "react";
import { deleteQuestion } from "./redux/quiz";

export default function DeleteQuestion() {
  const [question, setQuestion] = useState("");

  function handleDelete(e) {
    e.preventDefault();
    deleteQuestion({ question: question });
  }

  return (
    <div className="deleteQuestion">
      <form
        onSubmit={handleDelete}
        style={{ display: "flex", flexDirection: "column", marginTop: "1em" }}
        className="deleteForm"
      >
        <h1 className="form-title">Delete Question</h1>

        <label htmlFor="deleteQuestion">Delete Question</label>
        <input
          required
          type="text"
          name="deleteQuestion"
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <button className="delete-btn" type="submit">
          Delete Question
        </button>
      </form>
    </div>
  );
}
