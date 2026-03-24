import Icon from "../icon/icon";
import classes from "./legend.module.css";

export default function Legend() {
  return (
    <section className={classes.legend}>
      <section className={classes.legend__item}>
        <Icon variant="x" />
      </section>

      <section className={classes.legend__item}>
        <Icon variant="o" />
      </section>
    </section>
  );
}
