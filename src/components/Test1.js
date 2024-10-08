import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test1 = () => {
  const questions = [
    
    
      {
        "question": "What type of operator is cast operator?",
        "options": ["Unary", "binary", "ternary", "none of the above"],
        "answer": "Unary"
      },
      {
        "question": "Which of the following is true about manipulators?",
        "options": ["Used to makeup the program structure", "Are special stream functions that change certain format and characteristics of the input and output", "To carry out the operations of the manipulators <iomanip.h> must be included.", "All of the above"],
        "answer": "Are special stream functions that change certain format and characteristics of the input and output"
      },
      {
        "question": "Exception handling consists of ____ keywords?",
        "options": ["2", "3", "4", "5"],
        "answer": "5"
      },
      {
        "question": "The maximum stages in pipelining architecture",
        "options": ["2", "3", "6", "5"],
        "answer": "6"
      },
      {
        "question": "The ALU of a computer responds to the commands coming from",
        "options": ["Primary memory", "External memory", "Control section", "Cache memory"],
        "answer": "Control section"
      },
      {
        "question": "During DMA acknowledge cycle, CPU relinquishes",
        "options": ["Address bus only", "Control bus and data bus", "Address bus and control bus", "Data bus and address bus"],
        "answer": "Data bus and address bus"
      },
      {
        "question": "Which of the following offers external chips for memory and peripheral interface circuits?",
        "options": ["Embedded system", "Peripheral system", "Microcontrollers", "Microprocessor"],
        "answer": "Microprocessor"
      },
      {
        "question": "Which forms the heart of the operating system?",
        "options": ["Kernel", "Applications", "process", "None of the above"],
        "answer": "Kernel"
      },
      {
        "question": "What does VHDL stand for?",
        "options": ["Verilog hardware description language", "VHSIC hardware description language", "Very hardware description language", "VMEbus description language"],
        "answer": "VHSIC hardware description language"
      },
      {
        "question": "In which layer of the OSI model does a hub operate?",
        "options": ["Physical layer", "Data link layer", "Network layer", "Transport layer"],
        "answer": "Physical layer"
      },
      {
        "question": "What is an example of a Data link layer?",
        "options": ["TCP", "UDP", "IP", "HDLC"],
        "answer": "HDLC"
      },
      {
        "question": "What is the main function of ARP in a network?",
        "options": ["To map IP addresses to physical addresses (MAC addresses)", "To provide fast transmission of data", "To provide secure transmission of data", "To provide efficient transmission of data"],
        "answer": "To map IP addresses to physical addresses (MAC addresses)"
      },
      {
        "question": "What is an example of port and socket in transport layer?",
        "options": ["Port 80 and socket 192.168.1.1:80", "Port 443 and socket 192.168.1.1:443", "Port 25 and socket 192.168.1.1:25", "Port 53 and socket 192.168.1.1:53"],
        "answer": "Port 80 and socket 192.168.1.1:80"
      },
      {
        "question": "What is PuTTY used for in file transfer?",
        "options": ["File transfer client", "File transfer server", "secure shell client", "None of the above"],
        "answer": "secure shell client"
      },
      {
        "question": "What is the main principle of cryptography?",
        "options": ["Confidentiality", "Integrity", "Availability", "All of the above"],
        "answer": "All of the above"
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
    }, 500); // Add a small delay to allow feedback before moving to the next question
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

export default Test1;
