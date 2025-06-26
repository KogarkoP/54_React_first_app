import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
  return (
    <>
      <ul className={styles.pagination}>
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
