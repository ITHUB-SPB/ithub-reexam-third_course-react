import Board from "../../ui/board/board";
import Legend from "../../ui/legend/legend";
import Button from "../../ui/button/button";

import classes from "./game-screen.module.css";

type GameScreenProps = {
  setState: React.Dispatch<React.SetStateAction<string>>,
  state: "x-wins" | "o-wins" | "x-move" | "o-move" | "draw"
}

export default function GameScreen({ state, setState }: GameScreenProps) {
  return (
    <main className={classes.main}>
      <Legend />
      <Board state={state} setState={setState} />
    </main>
  );
}
