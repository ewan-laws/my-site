const DevIcon = ({ name, size = 50, coloured }) => (
  <i
    style={{
      fontSize: size,
    }}
    className={`devicon-${name} ${coloured ? "colored" : ""}`}
  />
);

export default DevIcon;
