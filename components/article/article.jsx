import styles from "./styles.module.css";
import Image from "next/image";

const Article = () => {
  return (
    <>
      <div className={styles.card_wrapper}>
        <div>
          <Image
            src="/images/Cantley-House-Hotel-Wedding-001.jpg"
            alt="Wedding photo"
            width={150}
            height={150}
            priority
          />
        </div>
        <div className={styles.text}>
          <h2>Cantley House Hotel Wedding Berkshire | Cris & Wayne</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
            officia fuga quasi adipisci error mollitia exercitationem, sed
            aliquam totam architecto? Laudantium neque impedit dolores? Eum
            itaque deleniti quae distinctio incidunt. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Optio, quos, at est beatae vero
            eligendi distinctio et veniam, minima ducimus unde repudiandae?
            Molestias quos illo magni maxime deserunt quia accusantium.
          </p>
        </div>
      </div>
    </>
  );
};

export default Article;
