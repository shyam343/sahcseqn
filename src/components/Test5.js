import React, { useState } from "react";
import './Test.css'; // Import local CSS

const Test5 = () => {
  const questions = [
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
        "question": "For a fixed bias circuit having RC=4.7kΩ and RB=1kΩ, VCC=10V and base current at bias point was found to be 0.2µA, find β.",
        "options": ["100", "106", "125", "0"],
        "answer": "100"
      },
      {
        "question": "An eight-stage ripple counter uses a flip-flop with propagation delay of 75 nanoseconds. The pulse width of the strobe is 50ns. Frequency of the input signal which can be used for proper operation of the counter is approximately",
        "options": ["1MHz", "2MHz", "500MHz", "4MHz"],
        "answer": "1MHz"
      },
      {
        "question": "Convert binary number 1101 to decimal",
        "options": ["13", "11", "49", "3"],
        "answer": "13"
      },
      {
        "question": "What will be the output of the following code?\n#include <stdio.h>\nint main (){\nfloat x = 20.0;\nx %= 3.0;\nprintf(\"%f\",x);\nreturn  0;\n}",
        "options": ["2", "2.5", "Warning", "Error"],
        "answer": "2"
      },
      {
        "question": "What will be the output of the following code?\n#include <iostream>\nusing namespace std;\nvoid fun(int x, int y){\n x = 20;\n y = 10;\n}\nint main() {\n int x = 10;\n fun (x, x);\n cout << x;\n return 0;\n}",
        "options": ["10", "20", "Compile time error", "30"],
        "answer": "10"
      },
      {
        "question": "Suppose that a bus has 16 data lines and required 4 cycles of 250 nanoseconds each to transfer data. The bandwidth of this bus would be 2 Megabytes/sec. If the cycle time of the bus was reduced to 125 nsecs and the number of cycles required for the transfer stayed the same what would the bandwidth of the bus?",
        "options": ["1 Megabyte/sec", "8 Megabyte/sec", "4 Megabyte/sec", "2 Megabyte/sec"],
        "answer": "2 Megabyte/sec"
      },
      {
        "question": "If each address space represents one byte of storage space, how many address lines are needed to access RAM chips arranged in a 4*6 array, where each chip is 8K *4 bits?",
        "options": ["13", "16", "15", "17"],
        "answer": "15"
      },
      {
        "question": "A Computer on a 10 Mbps network is regulated by a token bucket. The token bucket is filled at a rate of 2 Mbps. It is initially filled to capacity with 16 megabits. What is the maximum duration for which the computer can transmit at the full 10 Mbps?",
        "options": ["1.6 seconds", "2 seconds", "5 seconds", "8 seconds"],
        "answer": "2 seconds"
      },
      {
        "question": "Terminals are required for___",
        "options": ["real-time, batch processing and time-sharing", "real-time, time sharing & distributed message processing", "real-time, distributed processing & manager inquiry", "real-time, time sharing & message switching"],
        "answer": "real-time, time sharing & message switching"
      },
      {
        "question": "The mirror image for a two-dimensional reflection is generated relative to an axis of reflection by rotation of the object___ degrees about the reflection axis.",
        "options": ["90", "180", "270", "360"],
        "answer": "180"
      },
      {
        "question": "What is the time complexity of the selection sort algorithm in the best and worst cases?",
        "options": ["Best O(n^2), worst O(n)", "Best O (n log n), worst O(n^2)", "Best O(n), worst O(n^2)", "Best O(n^2) worst O(n^2)"],
        "answer": "Best O(n^2) worst O(n^2)"
      },
      {
        "question": "An OS contains 3 user processes each requiring 2 units of resource R. The minimum number of units of R such that no deadlocks ever arise is",
        "options": ["4", "3", "5", "6"],
        "answer": "4"
      },
      {
        "question": "Which of the following is the correct list of entities of Composite Entity pattern?",
        "options": ["Composite Entity, Coarse-Grained Object, Strategies", "Composite Entity, Dependent Object, Strategies", "Composite Entity, Coarse-Grained Object, Dependent Object, Strategies", "Composite Entity, Coarse-Grained Object, Dependent Object"],
        "answer": "Composite Entity, Coarse-Grained Object, Dependent Object, Strategies"
      },
      {
        "question": "What will be the output of the following code?\\n#include <stdio.h>\\n int main (){\\n float x = 20.0;\\nx %= 3.0;\\nprintf(\"%f\",x);\\nreturn 0;\\n}",
        "options": ["2", "2.5", "Warning", "Error"],
        "answer": "Error"
      },
      {
        "question": "What will be the output of the following code?\\n#include <iostream>\\nusing namespace std;\\nvoid fun(int x, int y){\\n x = 20;\\n y = 10;\\n}\\nint main() {\\n int x = 10;\\n fun (x, x);\\n cout << x;\\n return 0;\\n}",
        "options": ["10", "20", "Compile time error", "30"],
        "answer": "10"
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

export default Test5;
