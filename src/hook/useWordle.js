import { useEffect, useState } from "react";
import { letters } from "../data";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [listWord, setListWord] = useState([...Array(5)]); //array word guessed
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [checkKeyPad, setCheckKeyPad] = useState(() => letters);
  const [showModal, setShowModal] = useState(false);

  const hanldeFigureOutWord = (word) => {
    const arrayWord = [...word];
    const arraySolution = [...solution];
    const formatWord = arrayWord.map((letter) => ({
      key: letter,
      color: "grey",
    }));

    //check letter in currentWord correct then change color green
    arraySolution.forEach((l, index) => {
      if (formatWord[index].key === l) {
        formatWord[index].color = "green";
        arraySolution[index] = null; //delete letter correct in arraySolution
      }
    });

    //check in currentWord has correct letter change color yellow
    formatWord.forEach((item, index) => {
      if (arraySolution.includes(item.key) && item.color !== "green") {
        formatWord[index].color = "yellow";
      }
    });
    setHistory((pre) => [...pre, word]);
    addNewWord(formatWord);
  };

  function addNewWord(formatWord) {
    setTurn((pre) => pre + 1);
    if (solution.toLowerCase() === currentWord.toLowerCase()) {
      setIsCorrect(true);
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    }
    setListWord((pre) => {
      let add = 0;
      return pre.map((item) => {
        if (item === undefined && add === 0) {
          add = 1;
          return formatWord;
        }
        return item;
      });
    });

    const newLetters = [...letters];
    formatWord.forEach((l) => {
      const index = letters.findIndex(
        (item) => item.key.toUpperCase() === l.key.toUpperCase()
      );
      if (index !== -1) {
        if (l.color === "green") {
          newLetters[index]["color"] = "green";
        }
        if (l.color === "yellow" && newLetters[index]["color"] !== "green") {
          newLetters[index]["color"] = "yellow";
        }
        if (
          l.color === "grey" &&
          newLetters[index]["color"] !== "green" &&
          newLetters[index]["color"] !== "yellow"
        ) {
          newLetters[index]["color"] = "grey";
        }
      }
    });
    setCheckKeyPad([...newLetters]);
    setCurrentWord("");
  }

  const format = () => {
    //handle figure out word
    hanldeFigureOutWord(currentWord);
  };

  useEffect(() => {
    if (turn === 5 && !isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    }
  }, [turn, isCorrect]);

  const handleKeyUp = (e) => {
    const key = e.key;
    if (key === "Enter") {
      if (currentWord.length < 5) {
        console.log("The word long is less than 5");
        return;
      }

      if (history.includes(currentWord)) {
        console.log("You tried this word");
        return;
      }
      format();
    }

    if (key === "Backspace") {
      if (currentWord.length > 0) {
        setCurrentWord((pre) => pre.slice(0, -1));
      }
      return;
    }

    if (/^[a-zA-Z]$/.test(key)) {
      if (currentWord.length < 5) {
        setCurrentWord(currentWord + key);
      }
    }
  };
  return {
    currentWord,
    listWord,
    handleKeyUp,
    isCorrect,
    history,
    turn,
    checkKeyPad,
    showModal,
  };
};

export default useWordle;
