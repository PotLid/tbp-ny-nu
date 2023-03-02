import {SubLayout} from "@/components/layout";
import Close from "@/components/Close";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn, faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (
        <SubLayout title="Contact" className="relative z-10">
            <section className="layout-section">
                <article className="layout-article">
                    <h2 className="major heading-article">Contact</h2>
                    <p className="mx-0 mb-4 mt-0">
                        The New York Nu Chapter was founded in 1967 and has a total of 3,713 members.
                    </p>

                    <ul className="icons">
                        <li className="icons-list icons-list-first">
                            <a
                                className="icons-anchor"
                                href="https://www.linkedin.com/groups/12653877/" rel="noreferrer noopener"
                               target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </a>
                        </li>
                        <li className="icons-list">
                            <a
                                className="icons-anchor"
                                href="/" rel="noreferrer noopener" target="_blank">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </li>
                    </ul>
                </article>
                <Close/>
            </section>
        </SubLayout>

    )
}
