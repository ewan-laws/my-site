import DevIcon from "./DevIcon";

const ContentBlock = ({ children, title = "", logo }) => (
  <div className="cgrid-block">
    <div className="cgrid-block-title">
      {logo && (
        <div>
          <DevIcon name={logo} coloured />
        </div>
      )}
      <div>{title}</div>
    </div>
    <div className="cgrid-block-content">{children}</div>
  </div>
);

export default ContentBlock;
