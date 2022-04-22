import "./index.css";
import { useTranslation } from "react-i18next";

const Localization = () => {
  const { i18n } = useTranslation();

  const changeLang = (param) => {
    i18n.changeLanguage(param);
  };
  return (
    <div className="localizationContainer">
      <button
        className={`${i18n.language === "fr" ? "selected" : ""}`}
        onClick={() => {
          changeLang("fr");
        }}
      >
        FR
      </button>
      <button
        className={`${i18n.language === "en" ? "selected" : ""}`}
        onClick={() => {
          changeLang("en");
        }}
      >
        EN
      </button>
      <button
        className={`${i18n.language === "tr" ? "selected" : ""}`}
        onClick={() => {
          changeLang("tr");
        }}
      >
        {" "}
        TR
      </button>
    </div>
  );
};

export default Localization;
