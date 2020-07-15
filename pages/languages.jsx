import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Technology from "../components/ContentTechBlock";
import ContentRow from "../components/ContentRow";
import DevIcon from "../components/DevIcon";

const devIcon = (name) => <DevIcon name={name} coloured />;

const SVGIcon = ({ filename }) => (
  <div
    style={{
      width: 50,
      height: 50,
      backgroundImage: `url(logos/${filename}.svg)`,
    }}
  ></div>
);

const Langauges = () => (
  <Layout>
    <PageHeading>Languages & Technologies</PageHeading>
    <ContentRow>
      <Technology title="JavaScript" logo={devIcon("javascript-plain")}>
        <p>
          The lingua-franca of the web, and the first "proper" programming
          language I learnt when I was in my mid-teens. Although derrided by
          many, I believe it is a very powerful and capable language.
        </p>
        <p>
          I also believe it important to have a strong understanding of
          JavaScript before one begins using frameworks or libraries.
        </p>
        <p>
          As each year a new spec is released from the TC39 committee, I do my
          best to keep my eye on the new features being introduced.
        </p>
      </Technology>
      <Technology title="React" logo={devIcon("react-original")}>
        <p>
          Since first being introduced to react for my first employment, I have
          become a huge advocate for the component model.
        </p>
        <p>
          Aside from that, the library made reactive programming much easier
          than the traditional methods available, e.g. from jQuery and VanillaJS
        </p>
      </Technology>
      <Technology title="Redux" logo={<SVGIcon filename="redux" />}>
        <p>
          React is mostly just a view library, although it does support some
          state management, when developing a large application with many moving
          parts that interact with one another, Redux becomes an incredibly
          powerful tool.
        </p>
        <p>
          Using the dev tools it is possible to travel back in time to view past
          interactions and how they affect the state and UI.
        </p>
      </Technology>
      <Technology title="Git" logo={devIcon("git-plain")}>
        <p>
          Git is essential for my personal and professional endeavours, both
          code and non-code projects.
        </p>
        <p>
          Certain features git has are very powerful, for example git-bisect has
          helped me track down a breaking change that was implemented some time
          before the bug was spotted.
        </p>
      </Technology>
      <Technology title="Node.js" logo={devIcon("nodejs-plain")}>
        <p>
          As I enjoy working with JavaScript, I was excited when I first found
          out about Node.js. The tech allowed both the backend frontend to be
          programmed in the same language. It also usefully provides
          non-blocking io.
        </p>
        <p>I have experience with Express as a backend.</p>
      </Technology>
      <Technology title="Terminal" logo={<SVGIcon filename="terminal" />}>
        <p>
          Having used (and currently using) Linux as my daily driver, I feel
          confident using the terminal, the same goes with Unix systems such as
          MacOS
        </p>
        <p>
          My setup is Zsh + oh-my-zsh, this provides many useful features,
          including syntax highlighting, and better aesthetics.
        </p>
      </Technology>
    </ContentRow>
  </Layout>
);

export default Langauges;
