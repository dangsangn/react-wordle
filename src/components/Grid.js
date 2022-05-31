import React from "react";
import Row from "./Row";

const Grid = ({ listWord, currentWord, history }) => {
  return (
    <div className="grid">
      {listWord.map((word, index) => (
        <Row
          word={word}
          key={index}
          currentWord={index - history.length === 0 ? currentWord : ""}
        />
      ))}
    </div>
  );
};

export default Grid;
