import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import http from "../axios";

function Detail() {
  let params = useParams();
  const navigate = useNavigate();
  const [charInfo, setCharInfo] = useState();
  const { t } = useTranslation("");

  useEffect(() => {
    http
      .get(`characters/${params.id}`, {
        params: {
          apikey: "6a9a3e4a660867bb6fca9c3a68a2ed87",
          limit: 5,
        },
      })
      .then(({ data }) => {
        setCharInfo(data.results[0]);
      });
  }, [params]);

  return charInfo === undefined ? (
    ""
  ) : (
    <div className="detailContainer">
      <button onClick={() => navigate("/")}>{t("HomePage")}</button>
      <div className="heroDetail">
        <img
          src={`${charInfo.thumbnail.path}.${charInfo.thumbnail.extension}`}
        />
        <div className="hero">
          <h1 className="tittle">{charInfo.name}</h1>
          <p>{charInfo.description}</p>
          <a target={"_blank"} href={charInfo.urls[0].url}>
            {t("Detail")}
          </a>
          <div>
            <h3 className="tittleRomans">{t("Comics")}</h3>

            {charInfo.series.items.map((x) => {
              return <p> - {x.name}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
