import styles from "./styles.module.css";
import Article from "../article/article.jsx";
import Pagination from "../pagination/pagination.jsx";
import { useState } from "react";

const Main = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Cantley House Hotel Wedding Berkshire | Cris & Wayne",
      imgUrl:
        "https://format.creatorcdn.com/1349b281-ef4e-4f0d-9c64-800cfe54f8bf/0/0/0/0,0,1600,1067,1600,1200/0-0-0/2c130b54-738b-4bc5-a4ec-45bad9040cdc/1/1/Cantley-House-Hotel-Wedding-001.jpg?fjkss=exp=2066450057~hmac=7800053d19b8da412ed53dc16e67a8940529ee8829ce11ac11b5c873ea29e967",
      article:
        "Fact is, very few people (me included) enjoy being photographed.  So I wasn’t particularly surprised when Christine mentioned, in the pre-wedding questionnaire I send all my couples, that she wasn’t looking forward to being in front of the camera.  I totally get it.  Unless you’re a Hollywood Megastar, it can...",
    },
    {
      id: 2,
      title: "Hillingdon Register Office Wedding | Abi & Conor",
      imgUrl:
        "https://format.creatorcdn.com/1349b281-ef4e-4f0d-9c64-800cfe54f8bf/0/0/0/0,0,1600,1067,1600,1200/0-0-0/53d3c660-d320-4b24-92f4-f1199121edaa/1/1/Hillingdon_Register_Office_Wedding_27.jpg?fjkss=exp=2066817450~hmac=3cbefe3ea6bc7ca1f55147d3a1acaa5fe34bf77c9acbb9bd044e0f780aefabae",
      article:
        "Early May weddings are always a bit of a lottery when it comes to the kind of weather to expect.&nbsp; This was one of those Springs where April showers outstayed their welcome and the stormy bands of low pressure from the Atlantic seemed unrelenting.&nbsp; So it was with great relief,…",
    },
    {
      id: 3,
      title: "Brent Civic Centre Wedding | Cherry & Amar",
      imgUrl:
        "https://format.creatorcdn.com/1349b281-ef4e-4f0d-9c64-800cfe54f8bf/0/0/0/0,0,1600,1067,1600,1200/0-0-0/c4a4da87-6325-462a-b2b1-595463836287/1/1/Cherry%26Amar_COL-58.jpg?fjkss=exp=2066843977~hmac=ee8423656685f697b458f298e1359c229f05fb962663cc322a3c1ce00eaa5256",
      article:
        "Getting married is a pretty rare occurrence in anyone’s life and typically, all you’ll have left after the day is your rings and certificate.&nbsp; Everything else will alas&nbsp;probably&nbsp;end up in the bin.&nbsp; Therefore, having a permanent reminder of what you experienced on that momentous occasion shouldn’t be left…",
    },
    {
      id: 4,
      title: "6 Reasons Why You Need a Wedding Photographer",
      imgUrl:
        "https://format.creatorcdn.com/1349b281-ef4e-4f0d-9c64-800cfe54f8bf/0/0/0/0,0,3643,2429,3643,1200/0-0-0/97423c52-4886-4de6-bd7a-1f3454ca358b/1/1/High+House+Wedding+Photography.jpg?fjkss=exp=2066747040~hmac=3904f95e078c1501760b8a70f96189b0b669431787222341efe8a780a2e18143",
      article:
        "I was absolutely delighted to document this intimate wedding between Cherry and Amar at Brent Civic Centre in London.&nbsp; Although I only spent four hours with the couple and their lovely guests, we managed to cram in almost all the key moments you’d expect from a full day’s coverage. We…",
    },
    {
      id: 5,
      title: "York House Wedding, London | Rachel & Callum",
      imgUrl:
        "https://format.creatorcdn.com/1349b281-ef4e-4f0d-9c64-800cfe54f8bf/0/0/0/0,0,1600,1067,1600,1200/0-0-0/05fb87dd-7f43-4437-a711-0c55a8b732ad/1/1/Rachel%26Callum_COL-177_websize.jpg?fjkss=exp=2066747016~hmac=0f14212c1c8e7a3af8b63a5e540287f3cdec3a331ca2b992a8ce8d53179e11a5",
      article:
        "This was a short 2 hour booking involving just the wedding ceremony and drinks reception afterwards, and the truth is, I rarely take these on for a variety of reasons but I might save that for a future blog post!  However, York House is a gorgeous venue that’s very local…",
    },
  ]);

  const [isPageTitle, setPageTitle] = useState(true);
  return (
    <div className={styles.page_wrapper}>
      {isPageTitle && <h1>Journal</h1>}
      {articles.map((article) => {
        return (
          <Article
            key={article.id}
            title={article.title}
            imgUrl={article.imgUrl}
            article={article.article}
          />
        );
      })}
      <Pagination />
    </div>
  );
};

export default Main;
