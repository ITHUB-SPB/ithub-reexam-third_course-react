import Icon from "../icon/icon";

import classes from "./cell.module.css";

type CellProps = {
  value: "x" | "o" | null,
  onClick: () => void
}

export default function Cell({ value, onClick }: CellProps) {
  return (
    <button
      className={classes.cell}
      disabled={value !== null}
      onClick={onClick}
    >
      {value ? <Icon variant={value} /> : ""}
    </button>
  );
}
