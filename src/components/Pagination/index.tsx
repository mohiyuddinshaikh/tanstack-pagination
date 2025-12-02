import "./Pagination.scss";

interface PaginationProps {
  page: number;
  totalPages: number;
  disabled: boolean;
  onChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  disabled,
  onChange,
}: PaginationProps) {
  const windowSize = 5;
  const half = Math.floor(windowSize / 2);

  let start = Math.max(1, page - half);
  const end = Math.min(totalPages, start + windowSize - 1);

  if (end - start < windowSize - 1) {
    start = Math.max(1, end - windowSize + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination_container">
      <button disabled={page === 1 || disabled} onClick={() => onChange(1)}>
        First
      </button>

      <button
        disabled={page === 1 || disabled}
        onClick={() => onChange(page - 1)}
      >
        Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          disabled={disabled}
          onClick={() => onChange(p)}
          style={{
            fontWeight: p === page ? "bold" : "normal",
          }}
        >
          {p}
        </button>
      ))}

      <button
        disabled={disabled || page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next
      </button>

      <button
        disabled={disabled || page === totalPages}
        onClick={() => onChange(totalPages)}
      >
        Last
      </button>
    </div>
  );
}
