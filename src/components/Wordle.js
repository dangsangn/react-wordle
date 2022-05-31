import React, { useEffect } from "react";
import useWordle from "../hook/useWordle";
import Grid from "./Grid";
import KeyPad from "./KeyPad";
import Modal from "./Modal";

export default function Wordle({ solution }) {
  const {
    currentWord,
    handleKeyUp,
    turn,
    listWord,
    isCorrect,
    history,
    showModal,
  } = useWordle(solution);
  useEffect(() => {
    if (turn < 5 && !isCorrect) {
      window.addEventListener("keyup", handleKeyUp);
    } else {
      console.log("stop");
    }
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, turn, isCorrect]);

  return (
    <div>
      <Grid listWord={listWord} currentWord={currentWord} history={history} />
      <p>
        Solution: <strong>{solution}</strong>
      </p>
      <KeyPad />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  );
}
