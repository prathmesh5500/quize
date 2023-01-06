import React, { useState } from "react";

import "./App.css";
function App() {
  const [showFinalResult, setShowfinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];
  const questionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowfinalResult(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowfinalResult(false);
  };
  return (
    <div className="App">
      {/* Header */}
      <h1> Quize App</h1>
      {/* Current Score  */}
      <h1 className="current-score"> Current Score: {score} </h1>

      {showFinalResult ? (
        <div className="final-result">
          <h1> Final Result</h1>
          <h3>
            {score} out of {questions.length} correct (
            {(score / questions.length) * 100}%)
          </h3>
          <h2>
            <button onClick={() => restartQuiz()}>Restart Quize</button>
          </h2>
          <h1>Congratulations !</h1>
        </div>
      ) : (
        <div className="question-card">
          <h1>
            Question {currentQuestion + 1} out of {questions.length}
          </h1>
          <h3 className="question-text"> {questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => questionClick(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
