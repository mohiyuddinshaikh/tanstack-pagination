import "./Pagination.scss";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onChange,
}: PaginationProps) {
  const windowSize = 5; // how many pages to show at once
  const half = Math.floor(windowSize / 2);

  let start = Math.max(1, page - half);
  let end = Math.min(totalPages, start + windowSize - 1);

  // adjust start if we hit the end
  if (end - start < windowSize - 1) {
    start = Math.max(1, end - windowSize + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination_container">
      <button disabled={page === 1} onClick={() => onChange(1)}>
        First
      </button>

      <button disabled={page === 1} onClick={() => onChange(page - 1)}>
        Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          style={{
            fontWeight: p === page ? "bold" : "normal",
          }}
        >
          {p}
        </button>
      ))}

      <button disabled={page === totalPages} onClick={() => onChange(page + 1)}>
        Next
      </button>

      <button
        disabled={page === totalPages}
        onClick={() => onChange(totalPages)}
      >
        Last
      </button>
    </div>
  );
}
