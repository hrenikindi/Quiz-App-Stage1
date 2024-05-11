import React from "react";
import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>1.Which device needed for internet connection?</h2>
      <ul>
        <li>Modem</li>
        <li>PenDrive</li>
        <li>Phone</li>
        <li>Modem</li>
      </ul>
      <div className="btn-group">
        <button>Next</button>
        <button>Previous</button>
        <button>Quit</button>
      </div>
      <div className="index">1 of 5 Questions</div>
    </div>
  );
};

export default Quiz;
