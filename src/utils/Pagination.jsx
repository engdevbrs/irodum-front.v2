//import { useLocation } from "react-router-dom";

export default function Pagination() {

  // const path = useLocation();
  // const pathname = path.pathname

  return (
    <>
      <div
        className={`mbp_pagination text-center`}>
        <ul className="page_navigation">
          <li className="page-item">
            <a className="page-link">
              <span className="fas fa-angle-left" />
            </a>
          </li>
          <li className="page-item">
            <a className="page-link">1</a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link">
              2 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link">3</a>
          </li>
          <li className="page-item">
            <a className="page-link">4</a>
          </li>
          <li className="page-item">
            <a className="page-link">5</a>
          </li>
          <li className="page-item">
            <a className="page-link">...</a>
          </li>
          <li className="page-item">
            <a className="page-link">20</a>
          </li>
          <li className="page-item">
            <a className="page-link">
              <span className="fas fa-angle-right" />
            </a>
          </li>
        </ul>
        <p className="mt10 mb-0 pagination_page_count text-center">
          1 – 20 of 300+
        </p>
      </div>
    </>
  );
}
