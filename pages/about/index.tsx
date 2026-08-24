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
                        name="William Lagraves"
                        major="Aerospace Engineering"
                        linkedIn="https://www.linkedin.com/in/william-lagraves/"
                    />
                    <Profile
                        title="Vice President"
                        name="Eston Haase-Smith"
                        major="Mechanical Engineering and Mathematics"
                        linkedIn="https://www.linkedin.com/in/estonhaase-smith/"
                    />
                    <Profile
                        title="Treasurer"
                        name="Sarah Kassal"
                        major="Aerospace Engineering"
                        linkedIn="https://www.linkedin.com/in/sara-kassal-a9b689330/"
                    />
                    <Profile
                        title="Corresponding Secretary"
                        name="D.Jai Pawlowski"
                        major="Aerospace Engineering"
                        linkedIn=""
                    />
                    <Profile
                        title="Webmaster"
                        name="Daniel Keselman"
                        major="Computer Science"
                        linkedIn="https://www.linkedin.com/in/danielkeselman1/"
                    />
                    <Profile
                        title="Social Media Chair"
                        name="Emma Ressman"
                        major="Computer Science and Mathematics"
                        linkedIn="http://linkedin.com/in/e-ressman/"
                    />
                    <Profile
                        title="Community Outreach Committee Head"
                        name="Cassidy Shafer"
                        major="Chemical Engineering"
                        linkedIn="https://www.linkedin.com/in/cassidyshafer/"
                    />
                    <Profile
                        title="Proffessional Development Committee Head"
                        name="Kate Gilbert"
                        major="Mechanical Engineering"
                        linkedIn="https://www.linkedin.com/in/kate-gilbert27/"
                    />
                </article>
                <Close />
            </section>
        </SubLayout>
    )
}
