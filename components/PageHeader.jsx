import Link from "next/link";

const PageHeader = () => (
  <div className="page-header">
    <div className="page-header-content">
      <h2>
        <Link href="/">
          <a>Matthew Ewan-Laws</a>
        </Link>
      </h2>
    </div>
    <div className="page-header-divider"></div>
  </div>
);

export default PageHeader;
