import React from "react";
import { useContext } from "react";
import { DinoHomeContext } from "../../pages/Home";

export default function PaginationComponent() {
  const { setPage } = useContext(DinoHomeContext);

  let arrPages = [];

  for (let i = 1; i < 6; i++) {
    arrPages.push(i);
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination pagination-lg justify-content-center">
        {arrPages.map(page => {
          return (
            <li className="page-item ml-4" key={page}>
              <button
                className="page-link text-dark button-pagination"
                onClick={e => setPage(parseInt(e.target.innerText))}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
