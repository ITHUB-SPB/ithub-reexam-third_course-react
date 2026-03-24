import { useState } from "react";
import Cell from "../cell/cell";

import classes from "./board.module.css";
import type { State, CellValue } from "../../../types";


type BoardProps = {
  setState: React.Dispatch<React.SetStateAction<State>>,
  state: State
}

export default function Board({ state, setState }: BoardProps) {
  const [board, updateBoard] = useState<CellValue[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])

  const getCurrentMove = () => {
    return "x"
  }

  const handleClick = () => {
    updateBoard(previousState => {
      const newState = [...previousState]
      return newState
    })
    setState(state => {
      return state
    })
  }


  return (
    <section className={classes.board}>
      {board.map((row, rowIx) => {
        return row.map((value, colIx) =>
          <Cell
            key={`cell_${rowIx}_${colIx}`}
            value={value}
            onClick={handleClick}
          />)
      })}
    </section>
  );
}
