import styles from "./styles.module.css";
import Article from "../article/article.jsx";
import Pagination from "../pagination/pagination.jsx";

const Main = () => {
  return (
    <div className={styles.page_wrapper}>
      <h1>Journal</h1>
      <Article />
      <Article />
      <Article />
      <Pagination />
    </div>
  );
};

export default Main;
