import Link from "next/link";

export function NavBar({}){

    return (
        <nav>
            <Link href="/tbp">TBP</Link>
            <Link href="/chapter">Chapter</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}

export function Return({}){
    return <Link href="/">Return to main</Link>
}