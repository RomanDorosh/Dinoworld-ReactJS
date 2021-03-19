import React from "react";

export default function Footer() {
  return (
    <footer>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <span className="text-light">
          © 2021 Copyright: "DinoWorld" developed and design by{" "}
        </span>
        <a
          href="https://www.linkedin.com/in/roman-dorosh-2b26121bb/"
          target="_blank"
          rel="noreferrer"
        >
          R.D.
        </a>
      </div>
    </footer>
  );
}
