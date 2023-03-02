import {SubLayout} from "@/components/layout";
import Close from "@/components/Close";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Profile({title, name, major, linkedIn}:{title?: string, name?: string, major?:string, linkedIn?: string}) {
    return(
        <>
            <h2 className="sub-heading-article">{title} | <a href={linkedIn} rel="noreferrer noopener" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></h2>
            <p className="mx-0 mb-4 mt-0 p-article">
                {name} - {major}
            </p>
        </>
    )
}

export default function About() {

    return (
        <SubLayout title="About" className="relative z-10">
            <section className="layout-section">
                <article className="layout-article">
                    <h2 className="major heading-article">E-Board Members</h2>
                    <Profile
                        title="President"
                        name="Maxine Dupuis"
                        major="Biomedical Engineering"
                        linkedIn="https://www.linkedin.com/in/maxine-dupuis/"
                    />
                    <Profile
                        title="Vice President"
                        name="Arthur Tanchoco Jr."
                        major="Aerospace and Mechanical Engineer"
                        linkedIn="https://www.linkedin.com/in/arthur-tanchoco-jr-078697202/"
                    />
                    <Profile
                        title="Treasurer"
                        name="Alexis Tensfeldt"
                        major="Biomedical Engineering"
                        linkedIn="https://www.linkedin.com/in/alexis-tensfeldt/"
                    />
                    <Profile
                        title="Corresponding Secretary"
                        name="Junwoo Park"
                        major="Computer Science"
                        linkedIn="https://www.linkedin.com/in/junwoodev/"
                    />
                    <Profile
                        title="Recording Secretary"
                        name="Lolina Schietekat Sedas"
                        major="Industrial Engineering"
                        linkedIn="https://www.linkedin.com/in/lolinasc/"
                    />
                </article>
                <Close />
            </section>
        </SubLayout>
    )
}
