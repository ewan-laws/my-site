import DevIcon from "./DevIcon";

const ContentBlock = ({ children, title = "", logo }) => (
  <div className="cgrid-block">
    <div className="cgrid-block-title">
      {logo && <div>{logo}</div>}
      <p>{title}</p>
    </div>
    <div className="cgrid-block-content">{children}</div>
  </div>
);

export default ContentBlock;
