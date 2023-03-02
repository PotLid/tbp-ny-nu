import {SubLayout} from "@/components/layout";
import Close from "@/components/Close";
import Image from "next/image";

import samplePic from "@/static/images/ny_nu.jpeg";

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
                        <b>Tau Beta Pi</b> is universally recognized as the preeminent engineering honor society that students of all engineering disciplines strive to join.
                    </p>
                    <p className="mx-0 mb-4 mt-0">
                        It is the nation&#39;s <b>second oldest</b> honor society, founded at <a className="custom-anchor" href="https://www1.lehigh.edu/" target="_blank" rel="noreferrer noopener">Lehigh University</a> in 1885. It is the only engineering honor society that recognizes individuals from all engineering disciplines. There are currently <b>252 chapters</b> at US colleges and universities, 49 active alumni chapters in 16 districts across the country, and a total initiated membership of 629,381. Tau Beta Pi&#39;s vision is to recognize, celebrate, and champion excellence in engineering.
                    </p>
                    <p className="mx-0 mb-4 mt-0">
                        <b>The New York Nu chapter</b> at the <a className="custom-anchor" href="https://www.buffalo.edu/" target="_blank" rel="noreferrer noopener">University at Buffalo</a>, established in 1967, organizes a wide variety of events for its members and the campus community. The chapter&#39;s most notable and long-lived programs are its Honors Dinner and Engineering Tutoring programs. As of 2023, the New York Nu Chapter has a total of <b>3,750</b> members.
                    </p>
                    <p className="mx-0 mb-4 mt-0">
                        Since it&#39;s inauguration, <b>485,337 members</b> have been inducted into Tau Beta Pi. Currently there are <b>230 active collegiate chapters</b> in the United States. For more information on the national organization please visit <a className="custom-anchor" href="https://www.tbp.org" rel="noreferrer noopener" target="_blank">www.tbp.org</a>.
                    </p>
                </article>
                <Close />
            </section>
        </SubLayout>

    )
}
