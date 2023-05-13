import { useState } from "react";
import { TUrlData } from "../App";
import "./navbar.css";

interface RepoInput {
  data: TUrlData;
  setData: React.Dispatch<React.SetStateAction<TUrlData>>;
}

export function Navbar({ data, setData }: RepoInput) {
  const [repoName, setRepoName] = useState("html");
  const [selectedOption, setSelectedOption] = useState("desc");
  const [dropdownSelect, setDropdownSelect] = useState("forks");

  function handleSubmit(event: any) {
    event.preventDefault();
    setData({
      ...data,
      repoInput: repoName,
      order: selectedOption,
      sort: dropdownSelect,
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
            <div className="form-input-1">
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
                <input
                  type="radio"
                  name="asc"
                  id="asc"
                  value="asc"
                  checked={selectedOption === "asc"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <label htmlFor="asc"> Asc</label>{" "}
                <input
                  type="radio"
                  name="desc"
                  id="desc"
                  value="desc"
                  checked={selectedOption === "desc"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <label htmlFor="desc"> Desc</label>
              </div>
            </div>
            <div className="form-input-2">
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
              </div>
              <button type="submit">Search</button>
            </div>
          </form>
        </li>
      </ul>
    </nav>
  );
}
