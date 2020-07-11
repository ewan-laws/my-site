const ContentBlock = ({ children, title }) => (
  <div className="cgrid-block">
    <div className="cgrid-block-title">{title}</div>
    <div className="cgrid-block-content">{children}</div>
  </div>
);

export default ContentBlock;
