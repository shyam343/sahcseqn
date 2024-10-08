import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test4 = () => {
  const questions = [
      {
        "question": "___ diagram is time-oriented",
        "options": ["Activity", "Sequence", "Collaboration", "None of these"],
        "answer": "Sequence"
      },
      {
        "question": "GOF stands for",
        "options": ["Gamma for four", "Gang of four", "Gang of helm", "Glass optical fibre"],
        "answer": "Gang of four"
      },
      {
        "question": "Implementation in an OOP language requires writing source code for:",
        "options": ["Class and interface definition", "Method definitions", "Both a and b", "None"],
        "answer": "Both a and b"
      },
      {
        "question": "The father of AI is ___",
        "options": ["Alan Turing", "John McCarthy", "Warren McCulloh", "Elon Musk"],
        "answer": "John McCarthy"
      },
      {
        "question": "Problem space is an ____ space",
        "options": ["Virtual", "Abstract", "Search", "None of these"],
        "answer": "Search"
      },
      {
        "question": "The conditional statement of P->Q",
        "options": ["If P, then Q", "If P, Q", "P is sufficient for Q", "All the above"],
        "answer": "All the above"
      },
      {
        "question": "____ emphasize what to do to solve a given problem.",
        "options": ["Procedural knowledge", "Declarative knowledge", "Tacit knowledge", "Explicit knowledge"],
        "answer": "Procedural knowledge"
      },
      {
        "question": "____ has the ability to learn without being explicitly programmed",
        "options": ["Application learning", "Machine learning", "Neural network", "Computer vision"],
        "answer": "Machine learning"
      },
      {
        "question": "Artificial neural system are called",
        "options": ["Neural networks and neurocomputers", "Parallel distributed processors", "Connectionists system", "All the above"],
        "answer": "All the above"
      },
      {
        "question": "Back view lies in ____ position in 3rd angle projection.",
        "options": ["Above F.V", "Below T.V", "Right side of right-hand side view", "Left side of left-hand side view"],
        "answer": "Right side of right-hand side view"
      },
      {
        "question": "___ is a measure of the rate of return on an investment",
        "options": ["Present value", "Future value", "Net present value", "Internal rate of return"],
        "answer": "Internal rate of return"
      },
      {
        "question": "The process of tender in Nepal is governed by",
        "options": ["Public Procurement Act, 2062", "Public Procurement Act, 2063", "Public Procurement Act, 2064", "Public Procurement Act, 2065"],
        "answer": "Public Procurement Act, 2063"
      },
      {
        "question": "A 66.6% risk is considered as",
        "options": ["Low", "Nominal", "Moderate", "High"],
        "answer": "High"
      },
      {
        "question": "Professionals who breach the ‘duty of care’ are liable for injuries their negligence causes. This liability is commonly referred to as",
        "options": ["Professional offense", "Professional malpractice", "Professional misdeed", "Professional negligence"],
        "answer": "Professional malpractice"
      },
      {
        "question": "Person is applicable to re-register his/her name to the engineering council only after ___ period of his registration that has been cancelled.",
        "options": ["One month", "Three months", "One year", "Three years"],
        "answer": "One year"
      }    
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion]: option
    });

    // Automatically go to the next question after selecting an option
    setTimeout(() => {
      handleNext();
    }, 500); // Set a small delay to allow feedback before moving to the next question
  };

  if (showResult) {
    return (
      <div className="result-container">
        <h2>Final Results</h2>
        {questions.map((question, index) => (
          <div key={index} className="result-question">
            <h3>{question.question}</h3>
            <p
              className={
                selectedOptions[index] === question.answer
                  ? "correct"
                  : "incorrect"
              }
            >
              Your answer: {selectedOptions[index]}
            </p>
            <p className="correct-answer">Correct answer: {question.answer}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="test-container">
      <div className="quiz-content">
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className={`option-box ${
                selectedOptions[currentQuestion] === option
                  ? option === questions[currentQuestion].answer
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test4;
