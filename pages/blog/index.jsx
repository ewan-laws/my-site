import matter from "gray-matter";
import Markdown from "react-markdown";

import Layout from "../../components/LayoutSideNav";
import BlogPost from "../../components/BlogPost";

const Posts = ({ posts }) => (
  <Layout>
    <style jsx>{`
      .posts {
        margin-top: -70px;
      }
      .posts-post {
        border-bottom: 1px solid black;
        margin-bottom: 20px;
        padding-bottom: 10px;
        max-width: 1000px;
      }
    `}</style>
    <div className="posts">
      {posts.map(
        ({ slug, frontmatter: { title, date, author }, markdownBody }) => (
          <div className="posts-post">
            <BlogPost
              slug={slug}
              title={title}
              date={date}
              author={author}
              content={<Markdown source={markdownBody} />}
            />
          </div>
        )
      )}
    </div>
  </Layout>
);

export default Posts;

export async function getStaticProps() {
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.slice(0, 5).map((key, index) => {
      const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      console.log(document.data.created.valueOf());
      return {
        frontmatter: {
          ...document.data,
          created: document.data.created.valueOf(),
        },
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  return {
    props: {
      posts,
    },
  };
}
