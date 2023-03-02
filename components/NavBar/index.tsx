import Link from "next/link";
import styles from './styles.module.css'

export function NavBar({}) {

    return (
        <nav className="landing-line-vertical">
            <ul className={styles["landing-nav-ul"]}>
                <li>
                    <Link className={styles["landing-nav-link"]} href="/tbp">TBP</Link>
                </li>
                <li className={styles["landing-nav-li"]}>
                    <Link className={styles["landing-nav-link"]} href="/chapter">Chapter</Link>
                </li>
                <li className={styles["landing-nav-li"]}>
                    <Link className={styles["landing-nav-link"]} href="/about">About</Link>
                </li>
                <li className={styles["landing-nav-li"]}>
                    <Link className={styles["landing-nav-link"]} href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
