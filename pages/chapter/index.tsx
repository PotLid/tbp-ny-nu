import {SubLayout} from "@/components/layout";
import Close from "@/components/Close";
import Image from "next/image";

import samplePic from "@/static/images/ny_nu3.jpeg";

export default function Chapter() {
    return (
        <SubLayout title="Chapter" className="relative z-10">
            <section className="layout-section">
                <article className="layout-article">
                    <h2 className="major heading-article">NY Nu Chapter</h2>
                    <span className="image-article-wrap">
                        <Image
                            className="image-article" src={samplePic} alt=""
                            placeholder="blur"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </span>
                    <p className="mx-0 mb-4 mt-0">
                        Tau Beta Pi is universally recognized as the preeminent engineering honor society that students of all engineering disciplines strive to join.
                    </p>
                    <p className="mx-0 mb-4 mt-0">
                        The New York Nu Chapter was founded in 1967 and has a total of 3,713 members.
                    </p>
                </article>
                <Close />
            </section>
        </SubLayout>

    )
}
