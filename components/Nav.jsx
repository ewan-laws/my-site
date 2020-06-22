import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isExpanded, setExpanded] = useState(false);
  console.log(isExpanded);
  return (
    <>
      <div className="nav-container">
        <div className={`nav ${isExpanded ? "expanded" : "hidden"}`}>
          <ul className="nav-list">
            <li className="link">
              <Link href="/about">About</Link>
            </li>
            <li className="link">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="link">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="link">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="link">
              <Link href="/cv">CV</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hamburger" onClick={() => setExpanded(!isExpanded)} />
      <div className="divider"></div>
    </>
  );
};

export default Nav;
