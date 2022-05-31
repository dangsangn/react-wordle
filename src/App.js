// import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
function App() {
  // const [solution, setSolution] = useState("");
  const data = [
    { id: 1, word: "ninja" },
    { id: 2, word: "spade" },
    { id: 3, word: "pools" },
    { id: 4, word: "drive" },
    { id: 5, word: "relax" },
    { id: 6, word: "times" },
    { id: 7, word: "train" },
    { id: 8, word: "cores" },
    { id: 9, word: "pours" },
    { id: 10, word: "blame" },
    { id: 11, word: "banks" },
    { id: 12, word: "phone" },
    { id: 13, word: "bling" },
    { id: 14, word: "coins" },
    { id: 15, word: "hello" },
  ];

  const solutionWord = data[Math.floor(Math.random() * data?.length)];
  //useEffect(() => {
  // fetch("http://localhost:3004/solutions")
  //   .then((result) => result.json())
  //   .then((data) => {
  //     const solutionWord = data[Math.floor(Math.random() * data?.length)];
  //     setSolution(solutionWord.word);
  //   });
  // }, []);

  return (
    <div className="App">
      <h1>Wordle Reacr</h1>
      <div>
        <Wordle solution={solutionWord.word} />
      </div>
    </div>
  );
}

export default App;
