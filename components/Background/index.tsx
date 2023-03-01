import {BackgroundComponent} from "./types";
import styles from "./styles.module.css";

export const Background: BackgroundComponent = ({isMain}) => {

    return (
        <div className={`${styles.background} ${isMain ? "" : styles.active}`} />
    )
}
