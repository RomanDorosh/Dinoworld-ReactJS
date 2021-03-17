import React from "react";
import { useContext } from "react";
import { DinoHomeContext } from "../pages/Home";

export default function PaginationComponent() {
  const { setPage, page } = useContext(DinoHomeContext);

  let arrPages = [];

  for (let i = 1; i < 6; i++) {
    arrPages.push(i);
  }

  //    setPage(parseInt(e.target.innerText))
  console.log(page);

  return (
    <div>
      <ul className="pagination">
        {arrPages.map(page => {
          return (
            <li className="page-item" key={page}>
              <a
                className="page-link"
                onClick={e => setPage(parseInt(e.target.innerText))}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
