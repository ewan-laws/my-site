import PageHeader from "./PageHeader";

const Layout = ({ children }) => (
  <div>
    <PageHeader />
    <div className="page">{children}</div>
  </div>
);

export default Layout;
