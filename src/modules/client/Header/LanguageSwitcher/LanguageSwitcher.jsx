import styles from "./LanguageSwitcher.module.css";
import { useContext } from "react";
import { langContext } from "../../../../langContext";
const LanguageSwitcher = () => {
  const { lang, setLang } = useContext(langContext);
  const handeClick = ({ target }) => {
    // if (target.textContent.toLowerCase() === "en") {
    //   return setLang("en");
    // } else if (target.textContent.toLowerCase() === "tr") {
    //   return setLang("tr");
    // } else if (target.textContent.toLowerCase() === "ua") {
    //   return setLang("ua");
    // } else return setLang("ru");

    switch (target.textContent.toLowerCase()) {
      case "tr":
        setLang("tr");
        break;

      case "ua":
        setLang("ua");
        break;

      case "ru":
        setLang("ru");
        break;

      default:
        setLang("en");
    }
  };

  return (
    <div className={styles.langContainer}>
      <span
        className={lang === "en" ? styles.currentLang : styles.lang}
        onClick={handeClick}
      >
        EN
      </span>{" "}
      |{" "}
      <span
        className={lang === "tr" ? styles.currentLang : styles.lang}
        onClick={handeClick}
      >
        TR
      </span>{" "}
      |{" "}
      <span
        className={lang === "ua" ? styles.currentLang : styles.lang}
        onClick={handeClick}
      >
        UA
      </span>{" "}
      |{" "}
      <span
        className={lang === "ru" ? styles.currentLang : styles.lang}
        onClick={handeClick}
      >
        RU
      </span>
    </div>
  );
};

export default LanguageSwitcher;
