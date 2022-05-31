import React from "react";

const Row = ({ word, currentWord }) => {
  let row;
  if (word === undefined) {
    row = [...Array(5)].map((_, index) => (
      <span key={index} className="letter"></span>
    ));
  }
  if (word) {
    row = word.map((item, index) => (
      <span key={index} className={"letter " + item.color}>
        {item.key}
      </span>
    ));
  }
  if (currentWord) {
    return (
      <div className="row">
        {[...currentWord].map((l, index) => (
          <span key={index} className="letter filled">
            {l}
          </span>
        ))}
        {[...Array(5 - currentWord.length)].map((_, index) => (
          <span key={index} className="letter"></span>
        ))}
      </div>
    );
  }

  return <div className="row">{row}</div>;
};

export default Row;
