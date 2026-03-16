import PlayerName from "../player-name/player-name";
import Icon from "../icon/icon";
import classes from "./legend.module.css";
import oIcon from '../../../assets/o.svg'
import xIcon from '../../../assets/x.svg'

export default function Legend() {
  return (
    <section className={classes.legend}>
      <section className={classes.legend__item}>
        <img src={xIcon} className={classes.legend__icon} />
        <PlayerName name="Player1" />
      </section>

      <section className={classes.legend__item}>
        <img src={oIcon} className={classes.legend__icon} />
        <PlayerName name="Player2" />
      </section>
    </section>
  );
}
