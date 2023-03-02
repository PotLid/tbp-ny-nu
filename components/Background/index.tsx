import {BackgroundComponent} from "./types";
import styles from "./styles.module.css";

export const Background: BackgroundComponent = ({isMain, className, isLoaded}) => {
    return (
        <div className={`${isLoaded ? "" : styles["bg-loading"]} ${styles.background} ${isMain ? "" : styles.active}`} />
    )
}
