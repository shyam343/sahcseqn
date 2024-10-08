import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test2 = () => {
  const questions = [
      {
        "question": "Ohm’s law is not applicable to",
        "options": ["DC circuits", "High circuits", "Small circuits", "Semi-conductors"],
        "answer": "Semi-conductors"
      },
      {
        "question": "In a series of resonant circuit, with an increase in L",
        "options": ["Resonant frequency will decrease", "Bandwidth will decrease", "Q will increase", "All of the above"],
        "answer": "All of the above"
      },
      {
        "question": "In a three phase, delta connection____",
        "options": ["Line current is equal to phase current", "Line voltage is equal to phase voltage", "None of the above", "Line voltage and line current is zero"],
        "answer": "Line voltage is equal to phase voltage"
      },
      {
        "question": "The reverse current in a diode is of the order of",
        "options": ["KA", "mA", "µA", "A"],
        "answer": "µA"
      },
      {
        "question": "What is the minimum frequency at which a crystal will oscillate?",
        "options": ["Seventh harmonic", "Third harmonic", "Fundamental", "Second harmonic"],
        "answer": "Fundamental"
      },
      {
        "question": "Power amplifiers handle _______ signals compared to voltage amplifiers",
        "options": ["small", "large", "very small", "equal"],
        "answer": "large"
      },
      {
        "question": "A _____ is a group of devices that store digital data",
        "options": ["Circuits", "Variations", "Register", "Bit"],
        "answer": "Register"
      },
      {
        "question": "A Full-Adder adds ____ bits.",
        "options": ["2", "4", "8", "3"],
        "answer": "3"
      },
      {
        "question": "A positive AND gate is also a negative",
        "options": ["NAND gate", "AND gate", "NOR gate", "OR gate"],
        "answer": "OR gate"
      },
      {
        "question": "In 8085 microprocessor, the first machine cycle of every instruction is",
        "options": ["Opcode fetch", "Memory read", "Memory write", "I/O read"],
        "answer": "Opcode fetch"
      },
      {
        "question": "What is the size of the internal bus of the 8255 PPI?",
        "options": ["16 bits", "8 bits", "4 bits", "2 bits"],
        "answer": "8 bits"
      },
      {
        "question": "The interrupt which cannot be delayed and require the processor to process them immediately ____",
        "options": ["Maskable interrupt", "Non-maskable", "Periodic interrupts", "All of the above"],
        "answer": "Non-maskable"
      },
      {
        "question": "Which of the following is not a keyword in C?",
        "options": ["Double", "Ripple", "Default", "Static"],
        "answer": "Ripple"
      },
      {
        "question": "Wild pointer is",
        "options": ["Which is wild in nature", "Which has no value", "Which is not initialized", "None of the above"],
        "answer": "Which is not initialized"
      },
      {
        "question": "How many ways to invoke a function in C++?",
        "options": ["1", "2", "3", "4"],
        "answer": "3"
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

export default Test2;
