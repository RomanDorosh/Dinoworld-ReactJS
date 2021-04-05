import React from "react";
import { useContext } from "react";
import { DinoHomeContext } from "../../pages/Home";

export default function PaginationComponent() {
  const { setPage } = useContext(DinoHomeContext);

  //Set pages to an empty array then make a push (need to be improved)
  let arrPages = [];

  for (let i = 1; i < 6; i++) {
    arrPages.push(i);
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination pagination-lg justify-content-center">
        {/* with map method return list of pages with inner text that contain number of current page */}
        {arrPages.map(page => {
          return (
            <li className="page-item ml-4" key={page}>
              <button
                className="page-link text-dark button-pagination"
                // Set current page depending on number of page that was clicked
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
