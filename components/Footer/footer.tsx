import {anchorClass} from "@/styles/styles";

export default function Footer({}) {

    return(
        <footer className="w-full max-w-full mt-8 text-center">
            <p className="tracking-[.2rem] text-[.6rem] opacity-75 uppercase">
                &copy; TBP NY NU. Design:
                <a
                    className={anchorClass}
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
