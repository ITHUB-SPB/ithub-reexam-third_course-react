import { useState } from "react";
import classes from "./player-name.module.css";

type PlayerNameProps = {
  setName: (newName: string) => void,
  name: string
}

export default function PlayerName({ name, setName }: PlayerNameProps) {
  const [isEditing, setEditing] = useState(false)

  return <input
    onDoubleClick={() => setEditing(true)}
    size={1}
    className={classes.input}
    value={name}
    readOnly={!isEditing}
  />
}
