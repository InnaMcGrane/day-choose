import { useState } from "react";
import styles from "./DayChoose.module.css";

function DayChoose ({title, price, number}) {
    const[active, setStateActive] = useState(false)
    
    return (
      <div className={`${styles["day"]} ${active === true ? styles["day--active"] : ""}`} onClick={() => setStateActive(!active)}>
        <span className={`${styles["day__title"]}`}>{title}</span>
        <span className={`${styles["day__number"]}`}>{price}</span>
        <span className={`${styles["day__price"]}`}>{number}</span>
      </div>
    );
}

export default DayChoose;