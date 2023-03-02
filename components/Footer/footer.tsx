export default function Footer({}) {
    const YEAR = new Date().getFullYear();
    return(
        <footer className="w-full max-w-full mt-8 text-center">
            <p className="tracking-[.2rem] text-[.6rem] opacity-75 uppercase">
                {YEAR}&copy; TBP NY NU. Built by&nbsp;
                <a
                    className="custom-anchor"
                    href="https://potlid.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    PotLid
                </a>.
            </p>
        </footer>
    )
}
