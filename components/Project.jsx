import styles from "./project.module.scss";

const Screenshot = ({ url }) => (
  <div
    className={styles.screenshot}
    style={{ backgroundImage: `url(${url})` }}
  />
);

const Project = ({
  children,
  screenshotUrl,
  title,
  renderBody,
  technologies,
}) => (
  <div className={styles.outer}>
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.technologies}>
        {technologies.map((tech) => (
          <div className={styles.tech}>{tech}</div>
        ))}
      </div>

      <div className={styles.body}>{renderBody()}</div>
    </div>
    <Screenshot url={`screenshots/${screenshotUrl}`} />
  </div>
);

export default Project;
