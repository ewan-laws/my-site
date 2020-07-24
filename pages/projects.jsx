import LayoutSideNav from "../components/LayoutSideNav";

import Project from "../components/Project";

import styles from "./projects.module.scss";

const Projects = () => (
  <LayoutSideNav>
    <div className={styles.pageHeader}>Projects</div>
    <Project
      title="Cruiseo"
      screenshotUrl="cruiseo.png"
      technologies={[
        "JavaScript",
        "React",
        "Node.js",
        "Apollo/GraphQL",
        "Meteor.js",
      ]}
      renderBody={() => (
        <>
          <p>
            For my first job out of university I was tasked to work on building
            this web application.
          </p>
          <p>
            At its simplest, it is a cruise booking application, but it allows
            the potential cruisers to search and book many of the aspects within
            their holiday, i.e. a "one stop" application for their cruise
            booking needs.
          </p>
          <p>The user could book the following:</p>
          <ul>
            <li>Travel insurance</li>
            <li>Parking</li>
            <li>Hotels</li>
            <li>Flights</li>
          </ul>
        </>
      )}
    />
  </LayoutSideNav>
);

export default Projects;
