import moment from "moment";
import "./card.css";
import { TMetaData } from "../App";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

// Avatar, Repo name, Stars, Description, language
type selectedData = {
  name: string;
  description: string;
};

export function Card({ metaData }: TMetaData | any) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<selectedData>({
    name: "",
    description: "",
  });

  return (
    <>
      <Modal
        isActive={isActive}
        selectedData={selectedData}
        setIsActive={setIsActive}
      />
      <section className="card">
        {metaData?.total_count >= 1 && metaData?.items?.length >= 1 ? (
          metaData?.items?.map((item: any) => {
            return (
              <div key={item.id} className="card-body">
                <div className="card-upper-body">
                  <div className="card-body-image">
                    <figure>
                      <img
                        loading="lazy"
                        src={item.owner?.avatar_url}
                        alt={item.owner.login}
                      />
                    </figure>
                    <div className="card-body-header">
                      <h1>
                        <a href={item.html_url} target="_blank">
                          {item?.name}
                        </a>
                      </h1>
                      <h3>
                        <button
                          onClick={() => {
                            setSelectedData(item);
                            setIsActive(!isActive);
                          }}
                        >
                          @{item.owner.login}
                        </button>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body-header-info">
                    <p>
                      <strong>Created At: </strong>
                      {item?.created_at
                        ? moment(item.created_at).format("ll")
                        : item.created_at}
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
                <hr style={{ width: "100%" }} />
                <div className="card-body-detailed-info">
                  <p className="description">
                    <strong>Description: </strong>
                    {item?.description
                      ? item.description
                      : "There is no description available"}
                  </p>
                  <p>
                    <strong>Forks: </strong>
                    {item?.forks_count}
                  </p>
                  <p>
                    <strong>Last Updated: </strong>
                    {item?.updated_at
                      ? moment(item.updated_at).format("LL")
                      : item.created_at}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-repo">
            <p
              style={{
                marginBottom: "24px",
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              There was no repository with this name found. Please try with some
              other repository name.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
