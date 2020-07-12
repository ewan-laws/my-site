const ContentGrid = ({ children, minWidth = "320px" }) => (
  <div
    className="cgrid"
    style={{
      gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
    }}
  >
    {children}
  </div>
);

export default ContentGrid;
