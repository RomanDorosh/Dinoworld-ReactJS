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
        {/* link to my linkedIn profile */}
        <a
          href="https://www.linkedin.com/in/roman-dorosh-2b26121bb/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "wheat" }}
        >
          R.D.
        </a>
      </div>
    </footer>
  );
}
