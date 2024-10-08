import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test3 = () => {
  const questions = [
      {
        "question": "The regular sets are closed under",
        "options": ["Union", "Kleene's closure", "Concentration", "All of the above"],
        "answer": "All of the above"
      },
      {
        "question": "Can a DFA simulate NFA?",
        "options": ["NO", "Sometimes", "Yes", "Depend on NFA"],
        "answer": "Yes"
      },
      {
        "question": "P, Q, R are three languages, if P and R are regular and if PQ=R then",
        "options": ["Q=R", "Q=P", "Both a and b", "Q need not be regular"],
        "answer": "Q need not be regular"
      },
      {
        "question": "In a black and white system ___ per pixel is needed to control intensity of screen positions.",
        "options": ["0 bit", "1 bit", "2 bits", "3 bits"],
        "answer": "1 bit"
      },
      {
        "question": "The scattered light is called as____",
        "options": ["Specular reflection", "Ambient light", "Source light", "Diffuse reflection"],
        "answer": "Diffuse reflection"
      },
      {
        "question": "A circle, if scaled in only one direction becomes a",
        "options": ["Parabola", "Ellipse", "Hyperbola", "Remains a circle"],
        "answer": "Ellipse"
      },
      {
        "question": "What is the big O notation for a binary search algorithm?",
        "options": ["O (1)", "O (n)", "O (log n)", "O (n log n)"],
        "answer": "O (log n)"
      },
      {
        "question": "The maximum number of edges in a simple graph with 8 vertices is",
        "options": ["7", "2", "14", "28"],
        "answer": "28"
      },
      {
        "question": "The entity in E-R diagram is",
        "options": ["Physical object in database", "Logical object in database", "Table in database", "Field in database"],
        "answer": "Logical object in database"
      },
      {
        "question": "Transaction in a DBMS is",
        "options": ["Series of database operation that are treated as a single unit of work", "Single database operation", "Method used to encrypt data", "Method used to compress data"],
        "answer": "Series of database operation that are treated as a single unit of work"
      },
      {
        "question": "Semaphore are used to solve the problem of",
        "options": ["Race condition", "Mutual exclusion", "Process synchronization", "All of the above"],
        "answer": "All of the above"
      },
      {
        "question": "Belady anomaly occurs in",
        "options": ["Optimal replacement", "LRU", "FIFO (First In, First Out)", "Both b and c"],
        "answer": "FIFO (First In, First Out)"
      },
      {
        "question": "Identify the incorrect type of prototyping model",
        "options": ["Vertical prototype", "Horizontal prototype", "Diagonal prototype", "Domain prototype"],
        "answer": "Diagonal prototype"
      },
      {
        "question": "_____ is not included in architectural design decisions",
        "options": ["Type of applications", "Distribution of the systems", "Architectural styles", "Testing the system"],
        "answer": "Testing the system"
      },
      {
        "question": "Functional testing is a",
        "options": ["Random testing", "Test level", "STLC model", "Test type"],
        "answer": "Test type"
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

export default Test3;
