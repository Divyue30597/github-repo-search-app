import moment from "moment";
import "./card.css";
import data from "../../sample-data.json";

// Avatar, Repo name, Stars, Description, language

export function Card() {
  return (
    <section className="card">
      {data.items.map((item) => {
        return (
          <div key={item.id} className="card-body">
            <div className="card-body-image">
              <figure>
                <img src={item.owner?.avatar_url} alt={item.owner.login} />
              </figure>
            </div>
            <div className="card-body-header-info">
              <h1>
                <a href={item.html_url} target="_blank">
                  {item?.name}
                </a>
              </h1>
              <h3>
                <a href={item.owner.html_url} target="_blank">
                  @{item.owner.login}
                </a>
              </h3>
              <p>
                <strong>Repo fullname: </strong>
                {item.full_name}
              </p>
              <p>
                <strong>Created At: </strong>
                {item?.created_at
                  ? moment(item.created_at).format("LL")
                  : item.created_at}
              </p>
            </div>
            <div className="card-body-detailed-info">
              <p className="description">
                <strong>Description: </strong>
                {item?.description
                  ? item.description
                  : "There is no description available"}
              </p>
              <p>
                <strong>Language: </strong>
                {item?.language}
              </p>
              <p>
                <strong>Repo Stars: </strong>
                {item?.stargazers_count
                  ? item.stargazers_count > 1
                    ? `${item.stargazers_count} ⭐'s`
                    : `${item.stargazers_count} ⭐`
                  : "No stars"}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
