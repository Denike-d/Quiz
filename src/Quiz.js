import React, { useState } from "react";
import { questions } from "./questions";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  function handleNextQuestion() {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  function handleAnswer(isCorrect) {
    handleNextQuestion();
    if (isCorrect) {
      setScore(score + 1);
    }
  }

  return (
    <>
      {showScore ? (
        <div className="flex justify-center mx-auto mt-8">
          <p className="p-4 font-bold text-3xl text-blue-500">
            You scored {score} / {questions.length}
          </p>
        </div>
      ) : (
        <div className="justify-center mx-80 mt-8 space-y-4">
          <div className="flex justify-between">
            <button
              className="p-2 bg-blue-500 text-white font-bold"
              onClick={handleNextQuestion}
            >
              Next Question
            </button>
            <div className="font-medium p-2 border text-md text-blue-500">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
          </div>
          <div className="mx-auto bg-blue-200 px-16 py-8 space-y-2">
            <div className="font-bold text-xl">
              <p>{questions[currentQuestion].question}</p>
            </div>
            <div className="flex flex-col justify-between space-y-4 mx-auto">
              {questions[currentQuestion].answer_options.map((answerOption) => (
                <button
                  // style={{
                  //   background: `#${Math.floor(Math.random() * 16777215).toString(
                  //     16
                  //   )}`,
                  // }}
                  className="flex justify-start items-center  text-white p-2 bg-blue-500 w-60 rounded-lg"
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                >
                  {answerOption.answer}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
