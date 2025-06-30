import styles from "./styles.module.css";

const Article = ({ title, imgUrl, article }) => {
  const onCardClick = () => console.log(title);

  return (
    <>
      <div className={styles.card_wrapper} onClick={onCardClick}>
        <div>
          <img src={imgUrl} alt="Wedding image" />
        </div>
        <div className={styles.text}>
          <h2>{title}</h2>
          <p>{article}</p>
        </div>
      </div>
    </>
  );
};

export default Article;
