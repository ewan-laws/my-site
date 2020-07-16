import Link from "next/link";

import navLinks from "../navlinks.json";

const TopNav = () => (
  <div className="page-header">
    <div className="page-header-content">
      <h2>
        <Link href="/">
          <a>Matthew Ewan-Laws</a>
        </Link>
      </h2>
      <ul className="page-header-content-links">
        {navLinks.map(({ href, text }, i) => (
          <li key={`${href}_${i}`}>
            <Link href={href}>
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="page-header-divider"></div>
  </div>
);

export default TopNav;
