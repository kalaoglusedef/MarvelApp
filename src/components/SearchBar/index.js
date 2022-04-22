import { useState } from "react";
import { useTranslation } from "react-i18next";
import http from "../../axios";
import "./index.css";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const { t } = useTranslation("");

  const getCharacters = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setList([]);
    } else {
      http
        .get("characters", {
          params: {
            apikey: "6a9a3e4a660867bb6fca9c3a68a2ed87",
            limit: 5,
            nameStartsWith: e.target.value,
          },
        })
        .then(({ data }) => {
          setList(data.results);
        });
    }
  };

  return (
    <div className="searchContainer">
      <p>{t("search")}</p>
      <input
        type={"text"}
        onChange={getCharacters}
        placeholder={t("placeholder")}
        value={inputValue}
      ></input>
      <ul className={`${list.length > 0 ? "listOpen" : ""}`}>
        {list.map((x) => {
          return (
            <li
              onClick={() => {
                setInputValue("");
                setList([]);
                navigate(`/${x.id}`);
              }}
            >
              {t("charname")} {x.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
