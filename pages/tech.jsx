import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import ContentBlock from "../components/ContentBlock";

const Tech = () => (
  <Layout>
    <PageHeading>Languages & Technologies</PageHeading>
    <ContentBlock title="JavaScript">
      The lingua-franca of the web, and the first "proper" programming language
      I learnt when I was in my mid teens. Although derrided by many, I believe
      it is a very powerful and capable language.
    </ContentBlock>
    <ContentBlock title="Git"></ContentBlock>
  </Layout>
);

export default Tech;
