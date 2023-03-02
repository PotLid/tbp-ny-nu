import {BackgroundComponent} from "./types";
import {motion} from "framer-motion";
import styles from "./styles.module.css";

export const Background: BackgroundComponent = ({isMain, className, isLoaded}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "ease-in-out",
                duration: .325,
                delay: .625
            }}
            className={`${styles.background} ${isMain ? "" : styles.active}`}
        />
    )
}
