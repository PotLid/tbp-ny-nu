import { SubLayout } from "@/components/layout";
import Close from "@/components/Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <SubLayout title="Contact" className="relative z-10">
      <section className="layout-section">
        <article className="layout-article">
          <h2 className="major heading-article">Contact</h2>
          <p className="mx-0 mb-10 mt-0">We&#39;re here to help you.</p>

          <ul className="icons">
            <li className="icons-list">
              <a
                className="icons-anchor"
                href="https://www.linkedin.com/groups/12653877/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li className="icons-list">
              <a
                className="icons-anchor"
                href="mailto:maxinedu@buffalo.edu?subject=Mail from TBP - NY Nu "
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </article>
        <Close />
      </section>
    </SubLayout>
  );
}
