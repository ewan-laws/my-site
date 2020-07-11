const ContentBlock = ({ children, title }) => (
  <div className="cblock">
    <div className="cblock-title">{title}</div>
    <div className="cblock-content">{children}</div>
  </div>
);

export default ContentBlock;
