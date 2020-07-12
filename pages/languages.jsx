import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import Technology from "../components/ContentTechBlock";
import ContentRow from "../components/ContentRow";

const Langauges = () => (
  <Layout>
    <PageHeading>Languages & Technologies</PageHeading>
    <ContentRow>
      <Technology title="JavaScript" logo="javascript-plain">
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
          As each year a new spec is released from the TC39 committee, I try to
          keep my eye on the new features being introduced.
        </p>
      </Technology>
      <Technology title="React" logo="react-original">
        <p>
          Since first being introduced to react for my first employment, I have
          become a huge advocate for the component model.
        </p>
        <p>
          Aside from that, the library made reactive programming much easier
          than the traditional methods available, e.g. from jQuery and VanillaJS
        </p>
      </Technology>
      <Technology title="Redux" logo="redux-">
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
      <Technology title="Git" logo="git-plain">
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
    </ContentRow>
  </Layout>
);

export default Langauges;
