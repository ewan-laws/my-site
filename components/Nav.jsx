import { useState } from "react";

const Nav = () => {
  const [isExpanded, setExpanded] = useState(false);
  console.log(isExpanded);
  return (
    <>
      <div className="nav-container">
        <div className={`nav ${isExpanded ? "expanded" : "hidden"}`}>
          <ul className="nav-list">
            <li className="link link-1">About</li>
            <li className="link link-2">Projects</li>
            <li className="link link-3">Contact</li>
            <li className="link link-4">CV</li>
          </ul>
        </div>
      </div>
      <div className="hamburger" onClick={() => setExpanded(!isExpanded)} />
      <div className="divider"></div>
    </>
  );
};

export default Nav;
