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
    <div style={{ marginLeft: "200px", marginBottom: "200px" }}>
      <ul className="pagination">
        {arrPages.map(page => {
          return (
            <li className="page-item" key={page}>
              <button
                className="page-link"
                onClick={e => setPage(parseInt(e.target.innerText))}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
