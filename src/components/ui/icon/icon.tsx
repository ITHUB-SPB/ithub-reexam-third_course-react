import classes from "./icon.module.css";

import oIcon from '../../../assets/o.svg'
import xIcon from '../../../assets/x.svg'

type IconType = {
  variant: "x" | "o"
}

export default function Icon({ variant }: IconType) {
  const iconSrc = variant === "x" ? xIcon : oIcon

  return <img src={iconSrc} alt="icon" />;
}
