import { SubLayout } from "@/components/layout";
import Close from "@/components/Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import samplePic from "@/static/images/davis_compressed.jpg";

export default function TBP() {
  return (
    <SubLayout className="relative z-10">
      <section className="layout-section">
        <article className="layout-article">
          <h2 className="major heading-article">UB SEAS</h2>
          <span className="image-article-wrap">
            <Image
              className="image-article"
              src={samplePic}
              alt=""
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <p className="text-xs text-right mx-0 mb-0 mt-2">
              Photos of North and South Campus in the Summer | &copy; 2014&nbsp;
              <a
                className="custom-anchor"
                rel="noreferrer noopener"
                target="_blank"
                href="https://www.linkedin.com/in/arielnam/"
              >
                Ariel Namoca
              </a>
            </p>
          </span>
          <p className="mx-0 mb-10 mt-0">
            Welcome to the School of Engineering and Applied Sciences at the
            University at Buffalo. We provide an inclusive environment that
            supports big thinking, creative freedom, and vast possibilities for
            achievement.
          </p>
          <ul className="icons">
            <li className="icons-list">
              <a
                className="icons-anchor"
                href="https://engineering.buffalo.edu/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon icon={faHouse} />
              </a>
            </li>
            <li className="icons-list">
              <a
                className="icons-anchor"
                href="https://www.facebook.com/ubseas/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="icons-list">
              <a
                className="icons-anchor"
                href="https://twitter.com/UBengineering"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="icons-list">
              <a
                className="icons-anchor"
                href="https://www.linkedin.com/company/ub-seas"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </article>
        <Close />
      </section>
    </SubLayout>
  );
}
