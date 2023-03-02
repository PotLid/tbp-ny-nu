import Link from "next/link";
import {globalClass, linkClass} from "@/styles/styles";

export function NavBar({}){

    return (
        <nav className={`${globalClass}`}>
            <ul className="flex border border-white/100 rounded">
                <li>
                    <Link className={linkClass} href="/tbp">TBP</Link>
                </li>
                <li className="border-l">
                    <Link className={linkClass} href="/chapter">Chapter</Link>
                </li>
                <li className="border-l">
                    <Link className={linkClass} href="/about">About</Link>
                </li>
                <li className="border-l">
                    <Link className={linkClass} href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export function Return({}){
    return <Link href="/">Return to main</Link>
}
