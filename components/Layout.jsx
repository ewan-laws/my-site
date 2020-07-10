import PageHeader from "./PageHeader";

const Layout = ({ children }) => (
  <div>
    <PageHeader />
    <div className="page-content">{children}</div>
  </div>
);

export default Layout;
