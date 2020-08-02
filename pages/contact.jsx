import LayoutSideNav from "../components/LayoutSideNav";

import Project from "../components/Project";

import SocialMedia from "../components/SocialMedia";

import styles from "./contact.module.scss";

const Projects = () => (
  <LayoutSideNav>
    <div className={styles.container}>
      <div>
        <div className={styles.contactLine}>
          <span className={styles.contactType}>Email:</span> matt dot ewanlaws
          at gmail dot com
        </div>
        <div className={styles.contactLine}>
          <span className={styles.contactType}>Tel:</span> +44 (0) 7807919409
        </div>
        <div className={styles.contactLine}>
          <SocialMedia
            logoFile="linkedin.png"
            name="LinkedIn"
            href="https://www.linkedin.com/in/matthew-ewan-laws-9b016684/"
          />
        </div>
      </div>
    </div>
  </LayoutSideNav>
);

export default Projects;
