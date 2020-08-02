import styles from "./socialMedia.module.scss";

export default ({ logoFile, name, href, title }) => (
  <a href={href}>
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(logos/${logoFile})` }}
        className={styles.logo}
      />
    </div>
  </a>
);
