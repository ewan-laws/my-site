import LayoutSideNav from "../components/LayoutSideNav";

import Project from "../components/Project";

import styles from "./contact.module.scss";

const Projects = () => (
  <LayoutSideNav>
    <div className={styles.container}>
      <div>
        <div className={styles.contactLine}>
          <span className={styles.contactType}>Email:</span> matt dot ewan-laws
          <span className={styles.contactType}>Email:</span> matt dot ewanlaws
          at gmail dot com
        </div>
        <div className={styles.contactLine}>
          <span className={styles.contactType}>Tel:</span> +44 (0) 7807919409
        </div>
      </div>
    </div>
  </LayoutSideNav>
);

export default Projects;
