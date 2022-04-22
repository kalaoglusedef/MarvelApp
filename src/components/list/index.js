import { Link } from "react-router-dom";

const List = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((x) => {
        return (
          <Link to={`/${x.id}`}>
            <div>
              <div className="card">
                <img
                  src={`${x.thumbnail.path}.${x.thumbnail.extension}`}
                  alt=""
                />
                <p className="cardText">{x.name}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default List;
