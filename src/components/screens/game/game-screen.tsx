import Board from "../../ui/board/board";
import Legend from "../../ui/legend/legend";
import Button from "../../ui/button/button";

import classes from "./game-screen.module.css";

type GameScreenProps = {
  setState: (newState: string) => void,
  state: string
}

export default function GameScreen({ state, setState }: GameScreenProps) {
  return (
    <main className={classes.main}>
      <Legend />
      <Board />
    </main>
  );
}
