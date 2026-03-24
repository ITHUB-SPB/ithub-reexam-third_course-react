import { useState } from "react";

import Board from "../ui/board/board";
import Legend from "../ui/legend/legend";
import Button from "../ui/button/button";

import type { State } from "../../types";
import classes from "./screen.module.css";


export default function GameScreen() {
  const [state, setState] = useState<State>("x-wins")

  return (
    <main className={classes.main}>
      <Legend />
      <Board state={state} setState={setState} />
      <Button />
    </main>
  );
}
