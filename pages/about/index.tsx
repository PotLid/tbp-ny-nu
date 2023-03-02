import {SubLayout} from "@/components/layout";
import Close from "@/components/Close";
import Image from "next/image";

import samplePic from "@/static/images/ny_nu.jpeg"

function Profile({title, name, major, linkedIn}:{title?: string, name?: string, major?:string, linkedIn?: string}) {
    return(
        <>
            <h2 className="sub-heading-article">{title} | </h2>
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
                    <h2 className="major heading-article">About Us</h2>
                    <span className="image-article-wrap">
                        <Image
                            className="image-article" src={samplePic} alt=""
                            placeholder="blur"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </span>
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
