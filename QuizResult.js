import React from 'react';

// Component for displaying quiz result
function QuizResult(props) {
  return (
    <>
      {/* Result display section */}
      <div className='reslt'>
          Your Score: {props.score} <br />
          Total Score: {props.totalScore}
      </div>

      {/* Try Again button */}
      <button id='next-button' onClick={props.tryAgain}>Try Again</button>
    </>
  )
}
export default QuizResult;
