import { useState } from "react";
import { TUrlData } from "../App";
import "./navbar.css";

interface RepoInput {
  data: TUrlData;
  setData: React.Dispatch<React.SetStateAction<TUrlData>>;
}

export function Navbar({ data, setData }: RepoInput) {
  const [repoName, setRepoName] = useState("node");
  const [selectedOption, setSelectedOption] = useState("desc");
  const [dropdownSelect, setDropdownSelect] = useState("forks");
  const [perPageVal, setperPageVal] = useState(5);

  function handleSubmit(event: any) {
    event.preventDefault();
    setData({
      ...data,
      repoInput: repoName,
      order: selectedOption,
      sort: dropdownSelect,
      per_page: perPageVal,
    });
  }

  return (
    <nav className="navbar">
      <ul>
        <li>
          repofinder
          <span className="blink">_</span>
        </li>
        <li>
          <form onSubmit={handleSubmit}>
            <div className="per-page">
              <label htmlFor="perPage" style={{ marginBottom: "4px" }}>
                <strong>Per page: </strong>
              </label>
              <select
                name="perPage"
                id="perPage"
                onChange={(e) => {
                  setperPageVal(Number(e.target.value));
                }}
              >
                <option value={5}>5</option>
                <option value={15}>15</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
            <div className="select-options">
              <label htmlFor="sort" style={{ marginBottom: "4px" }}>
                <strong>Sort by:</strong>
              </label>
              <select
                name="sort"
                id="sort"
                onChange={(e) => {
                  setDropdownSelect(e.target.value);
                }}
              >
                <option value="stars">Stars</option>
                <option value="forks">Forks</option>
                <option value="help-wanted-issues">Help Wanted Issues</option>
                <option value="update">Last updated</option>
              </select>
            </div>
            <div className="radio-buttons">
              <p style={{ marginBottom: "8px" }}>
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
