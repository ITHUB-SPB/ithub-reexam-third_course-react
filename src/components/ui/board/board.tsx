import { useState } from "react";
import Cell from "../cell/cell";

import classes from "./board.module.css";

type CellValue = null | 'x' | 'o'

type BoardProps = {
  setState: React.Dispatch<React.SetStateAction<string>>,
  state: "x-wins" | "o-wins" | "x-move" | "o-move" | "draw"
}

export default function Board({ state, setState }: BoardProps) {
  const [board, updateBoard] = useState<CellValue[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])

  const currentMove = state.endsWith('move') ? state[0] : null;

  return (
    <section className={classes.board}>
      {board.map((row, rowIx) => {
        return row.map((value, colIx) =>
          <Cell
            key={`cell_${rowIx}_${colIx}`}
            value={value}
            onClick={() => {
              updateBoard(previousState => {
                const newState = [...previousState]
                newState[rowIx][colIx] = currentMove as "x" | "o"
                return newState
              })

              setState(state => {
                if (!state.endsWith('move')) {
                  return state
                }
                if (state === "x-move") {
                  return "o-move"
                }
                return "x-move"
              })
            }}
          />)
      })}
    </section>
  );
}
