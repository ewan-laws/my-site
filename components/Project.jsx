import styles from "./project.module.scss";

const Screenshot = ({ url }) => (
  <div className={styles.screenshotContainer}>
    <div
      className={styles.screenshot}
      style={{ backgroundImage: `url(${url})` }}
    />
  </div>
);

const Project = ({
  children,
  screenshotUrl,
  title,
  renderBody,
  technologies,
}) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.title}>{title}</div>
    </div>
    <div className={styles.technologies}>
      {technologies.map((tech, i) => (
        <div key={`project_${i}`} className={styles.tech}>
          {tech}
        </div>
      ))}
    </div>

    <div className={styles.body}>{renderBody()}</div>
    <Screenshot url={`screenshots/${screenshotUrl}`} />
  </div>
);

export default Project;
