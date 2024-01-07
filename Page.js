import React, { useState } from 'react';
import { QuestionData } from './QuestionData'; // 
import QuizResult from './QuizResult';

function Page() {
    // State variables
    const [currentQuestion, setCurrentQuestion] = useState(0); // 
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // Function to change the question
    const changeQuestion = () => {
        updateScore(); // Update score before changing question

        // If not at the last question, move to the next question
        if (currentQuestion < QuestionData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0); // Reset clicked option for the new question
        } else {
            setShowResult(true); // Show the result when all questions are answered
        }
    }

    // Function to update the score
    const updateScore = () => {
        // Check if the clicked option is the correct answer and update the score accordingly
        if (clickedOption === QuestionData[currentQuestion].answer) {
            setScore(score + 1); // Increment score for correct answer
        } else {
            setScore(score - 1); // Deduct one point for wrong answer
        }
    }

    // Function to reset all values for a new quiz or retry
    const resetAll = () => {
        setShowResult(false); // Hide the result section
        setCurrentQuestion(0); // Reset to the first question
        setClickedOption(0); // Reset clicked option
        setScore(0); // Reset score
    }

    return (
        <div>
            <p className="heading-txt">SCALEYOU QUIZ</p>
            <div className="container">
                {showResult ? ( // Display result or the question
                    <QuizResult score={score} totalScore={QuestionData.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            {/* Display the current question */}
                            <span id="question-number">({currentQuestion + 1}). </span>
                            <span id="question-txt">{QuestionData[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {/* Display options for the current question */}
                            {QuestionData[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        className={`option-btn ${clickedOption === i + 1 ? "checked" : null}`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                            <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
export default Page;
