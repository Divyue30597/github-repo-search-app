import { useState } from "react";
import { urlData } from "../App";
import "./navbar.css";

interface RepoInput {
  data: urlData;
  setData: React.Dispatch<React.SetStateAction<urlData>>;
}

export function Navbar({ data, setData }: RepoInput) {
  const [repoName, setRepoName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setData({ ...data, repoInput: repoName, order: selectedOption });
  }

  return (
    <nav className="navbar">
      <ul>
        <li>
          repofinder<span className="blink">_</span>
        </li>
        <li>
          <form onSubmit={handleSubmit}>
            <div className="radio-buttons">
              <p>
                <strong>Order By: </strong>
              </p>
              <label htmlFor="asc">
                <input
                  type="radio"
                  name="asc"
                  id="asc"
                  value="asc"
                  checked={selectedOption === "asc"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                Asc
              </label>{" "}
              <label htmlFor="desc">
                <input
                  type="radio"
                  name="desc"
                  id="desc"
                  value="desc"
                  checked={selectedOption === "desc"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                Desc
              </label>
            </div>
            <div className="form-input">
              <input
                value={repoName}
                placeholder="Search repos..."
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  setRepoName(e.target.value);
                }}
              />
              <button type="submit">Search</button>
            </div>
          </form>
        </li>
      </ul>
    </nav>
  );
}
