import Link from "next/link";

export function NavBar({}){

    return (
        <nav className="landing-line-vertical">
            <ul className="flex border border-white/100 rounded">
                <li>
                    <Link className="landing-nav-link" href="/tbp">TBP</Link>
                </li>
                <li className="border-l">
                    <Link className="landing-nav-link" href="/chapter">Chapter</Link>
                </li>
                <li className="border-l">
                    <Link className="landing-nav-link" href="/about">About</Link>
                </li>
                <li className="border-l">
                    <Link className="landing-nav-link" href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export function Return({}){
    return <Link href="/">Return to main</Link>
}
