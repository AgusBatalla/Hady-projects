import { Link } from "react-router-dom";

type PaginationType = {
  current: number;
  total: number;
};

type PaginationProps = {
  path: string;
  pag: PaginationType;
  onPageChange: (page: number) => void;
};

const Pagination = ({ path, pag, onPageChange }: PaginationProps) => {
  return (
    <nav className="bg-light py-3">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${pag.current === 1 ? "disabled" : ""}`}>
          <Link
            className="page-link"
            to={`${path}/p/${pag.current - 1}`}
            onClick={() => onPageChange(pag.current - 1)}
          >
            Anterior
          </Link>
        </li>
        <li className="page-item active">
          <span className="page-link">
            {pag.current}/{pag.total}
          </span>
        </li>
        <li
          className={`page-item ${pag.current === pag.total ? "disabled" : ""}`}
        >
          <Link
            className="page-link"
            to={`${path}/p/${pag.current + 1}`}
            onClick={() => onPageChange(pag.current + 1)}
          >
            Siguiente
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
