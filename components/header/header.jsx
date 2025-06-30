import styles from "./styles.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Header = () => {
  const [mainPageLinkText, setMainPageLinkText] = useState("HOME");

  return (
    <header className={styles.header}>
      <div
        className={styles.logo}
        onClick={() =>
          setMainPageLinkText(mainPageLinkText === "HOME" ? "MAIN" : "HOME")
        }
      >
        <a href="#">
          <Image
            src="/images/Gino+Zisa+Classic+BW+(500x500T).png"
            alt="logo"
            width={200}
            height={50}
            priority
          />
        </a>
      </div>
      <div>
        <ul className={styles.nav}>
          <li>
            <a href="#">{mainPageLinkText}</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Weddings</a>
          </li>
          <li>
            <a href="#">Other Services</a>
          </li>
          <li>
            <a href="#">Journal</a>
          </li>
          <li>
            <a href="#">About Gino</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.social}>
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="#">Share</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
