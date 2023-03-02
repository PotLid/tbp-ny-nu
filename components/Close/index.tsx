import styles from './styles.module.css'
import Link from "next/link";

export default function Close({}) {
    return(
        <Link href="/" className={styles.close}/>
    )
}
