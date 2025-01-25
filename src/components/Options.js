import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function Options() {
  const { questions, dispatch, answer, index } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {questions[index].options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === questions[index].correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
