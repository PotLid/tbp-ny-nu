import Link from "next/link";

export function NavBar({}) {

    return (
        <nav className="landing-line-vertical">
            <ul className="landing-nav-ul">
                <li>
                    <Link className="landing-nav-link" href="/tbp">UB SEAS</Link>
                </li>
                <li className="landing-nav-li">
                    <Link className="landing-nav-link" href="/chapter">Chapter</Link>
                </li>
                <li className="landing-nav-li">
                    <Link className="landing-nav-link" href="/about">E-Board</Link>
                </li>
                <li className="landing-nav-li">
                    <Link className="landing-nav-link" href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
