import React, { useState } from "react";
import Question from "./Question"; // استيراد مكون السؤال
import Option from "./Option"; // استيراد مكون الخيار

// قائمة الأسئلة
const questions = [
  {
    questionText: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    questionText: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  // يمكنك إضافة المزيد من الأسئلة هنا
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>
            Your Score: {score} / {questions.length}
          </h2>
        </div>
      ) : (
        <div className="question-section">
          <Question text={questions[currentQuestionIndex].questionText} />
          <div className="option-section">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <Option
                key={index}
                optionText={option}
                handleClick={() => handleOptionClick(option)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
