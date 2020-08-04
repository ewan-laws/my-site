import matter from "gray-matter";
import Markdown from "react-markdown";

import Layout from "../../components/LayoutSideNav";
import BlogPost from "../../components/BlogPost";

const Post = ({ frontMatter, markdownBody }) => (
  <Layout>
    <BlogPost
      author={frontMatter.author}
      date={frontMatter.date}
      title={frontMatter.title}
      content={<Markdown source={markdownBody} />}
    />
  </Layout>
);

export default Post;

export async function getStaticProps({ params }) {
  const content = await import(`../../posts/${params.slug}.md`);
  const data = matter(content.default);
  return {
    props: {
      frontMatter: {
        ...data.data,
        created: data.data.created.valueOf(),
      },
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      return slug;
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
