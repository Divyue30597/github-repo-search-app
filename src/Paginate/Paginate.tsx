import { useState } from "react";
import { TMetaData, TUrlData } from "../App";
import "./paginate.css";

export function Paginate({
  metaData,
  data,
  setData,
}: {
  metaData: TMetaData | any;
  data: TUrlData;
  setData: React.Dispatch<React.SetStateAction<TUrlData>>;
}) {
  const { page } = data;

  function prevPage() {
    if (data.page > 1) {
      setData({ ...data, page: page - 1 });
    }
  }

  function nextPage() {
    setData({ ...data, page: page + 1 });
  }

  return (
    <section className="paginate">
      <div className="per-page">
        <label htmlFor="perPage" style={{ marginBottom: "4px" }}></label>
        <select
          name="perPage"
          id="perPage"
          onChange={(e) => {
            setData({ ...data, per_page: Number(e.target.value) });
          }}
        >
          <option value={6}>6</option>
          <option value={14}>14</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <div className="pagination-button">
        <button disabled={page === 1} onClick={() => prevPage()}>
          ➜
        </button>
        <strong>{data.page}</strong>
        <button
          disabled={metaData?.items?.length === 0}
          onClick={() => nextPage()}
        >
          ➜
        </button>
      </div>
    </section>
  );
}
