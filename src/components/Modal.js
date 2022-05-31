import React from "react";

const Modal = ({ isCorrect, turn, solution }) => {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Congrat!</h1>
          <p>You resolved in {turn} turn.</p>
          <p>Solution is: {solution}</p>
        </div>
      )}
      {!isCorrect && turn >= 5 && (
        <div>
          <div>
            <h1>Try again!</h1>
            <p>Solution is: {solution}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
