import logo from '../../../assets/Logo.png'
import x from '../../../assets/x.svg'
import Icon from "../../ui/icon/icon";
import Button from "../../ui/button/button";

import classes from "./splash-screen.module.css";

type SplashScreenProps = {
  setState: (newState: string) => void
}

export default function SplashScreen({ setState }: SplashScreenProps) {
  return (
    <main className={classes.main}>
      <img src={x} className={classes.bgIcon} />
      <img
        onClick={() => setState("progress")}
        className={classes.logo}
        src={logo}
        alt="logo"
      />
    </main>
  );
}
