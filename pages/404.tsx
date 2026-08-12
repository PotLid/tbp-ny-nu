import {SubLayout} from "@/components/layout";
import Close from "@/components/Close";

export default function Custom404({}) {
    return(
        <SubLayout title="Not Found" className="relative z-10">
            <section className="layout-section">
                <article className="layout-article">
                    <h2 className="major heading-article">404 | Not Found</h2>
                    <p className="mx-0 mb-10 mt-0">
                        This page could not be found.
                    </p>
                </article>
                <Close />
            </section>
        </SubLayout>
    )
}
