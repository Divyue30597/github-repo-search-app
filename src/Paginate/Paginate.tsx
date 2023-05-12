import { TUrlData } from "../App";
import "./paginate.css";

export function Paginate({
  data,
  setData,
}: {
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
      <button onClick={() => nextPage()}>➜</button>
    </section>
  );
}
