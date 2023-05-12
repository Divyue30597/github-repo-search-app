import { TMetaData, TUrlData } from "../App";
import "./paginate.css";

export function Paginate({
  metaData,
  data,
  setData,
}: {
  metaData: TMetaData;
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
      <button disabled={page === 1} onClick={() => prevPage()}>
        ➜
      </button>
      <strong>{data.page}</strong>
      <button disabled={metaData.items.length === 0} onClick={() => nextPage()}>
        ➜
      </button>
    </section>
  );
}
