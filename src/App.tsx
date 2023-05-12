import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./Card/Card";
import { Navbar } from "./Nav/Navbar";
import axios from "axios";

export type urlData = {
  repoInput: string;
  sort: string;
  order: string;
  per_page: number;
  page: number;
};

function App() {
  const [data, setData] = useState<urlData>({
    repoInput: "node",
    sort: "stars",
    order: "desc",
    per_page: 30,
    page: 1,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [metaData, setMetaData] = useState({});

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
    </>
  );
}

export default App;
