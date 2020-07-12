import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import ContentBlock from "../components/ContentBlock";
import ContentGrid from "../components/ContentGrid";

const Tech = () => (
  <Layout>
    <PageHeading>Languages & Technologies</PageHeading>
    <ContentGrid>
      <ContentBlock title="JavaScript">
        <p>
          The lingua-franca of the web, and the first "proper" programming
          language I learnt when I was in my mid-teens. Although derrided by
          many, I believe it is a very powerful and capable language.
        </p>
        <p>
          I also believe it important to have a strong understanding of
          JavaScript before one begins using frameworks or libraries.
        </p>
      </ContentBlock>
      <ContentBlock title="Git">
        <p>
          Git is essential for my personal and professional endeavours, both
          code and non-code projects.
        </p>
        <p>
          Certain features git has are very powerful, for example git-bisect has
          helped me track down a breaking change that was implemented some time
          before the bug was spotted.
        </p>
      </ContentBlock>
    </ContentGrid>
  </Layout>
);

export default Tech;
