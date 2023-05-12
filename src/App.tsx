import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./Card/Card";
import { Navbar } from "./Nav/Navbar";
import axios from "axios";
import { Paginate } from "./Paginate/Paginate";

export type TMetaData = {
  total_count: number;
  incomplete_results: boolean;
  items: Array<any>;
};

export type TUrlData = {
  repoInput: string;
  sort: string;
  order: string;
  per_page: number;
  page: number;
};

function App() {
  const [data, setData] = useState<TUrlData>({
    repoInput: "node",
    sort: "stars",
    order: "desc",
    per_page: 5,
    page: 1,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [metaData, setMetaData] = useState<TMetaData>();

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();
    axios
      .get(
        `https://api.github.com/search/repositories?q=${data.repoInput}` +
          `&per_page=${data.per_page}` +
          `&sort=${data.sort}` +
          `&order=${data.order}` +
          `&page=${data.page}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      )
      .then((response) => {
        setMetaData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => abortController.abort();
  }, [data]);

  return (
    <>
      <Navbar data={data} setData={setData} />
      <hr />
      {isLoading && <div>Loading...</div>}
      {!isLoading && <Card metaData={metaData} />}
      <Paginate data={data} setData={setData} />
      <hr />
      <footer className="footer">
        <p>
          Created by{" "}
          <strong>
            <a target="_blank" href="https://github.com/Divyue30597">
              Divyue30597
            </a>
          </strong>
        </p>
        <p>
          Repo link:{" "}
          <strong>
            <a
              target="_blank"
              href="https://github.com/Divyue30597/github-repo-search-app"
            >
              repofinder_
            </a>
          </strong>
        </p>
      </footer>
    </>
  );
}

export default App;
